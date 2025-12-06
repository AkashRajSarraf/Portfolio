import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        const moveSpeed = 0.5;

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                this.size = Math.random() * 2 + 1;
                this.baseY = this.y; // For parallax reference
            }

            update(scrollY) {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Parallax effect: Shift Y based on scroll
                // Move opposite to scroll for depth effect, or with it
                const parallaxShift = scrollY * 0.5;

                // Wrap around screen for infinite feel (optional, but keep simple for now)
                // Just keeping them within bounds + parallax offset
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = '#8b5cf6'; // Violet particle
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0a0a');
            gradient.addColorStop(1, '#111');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const scrollY = window.scrollY;

            particles.forEach((p, index) => {
                // Apply parallax logic by temporarily shifting position for drawing?
                // Or actually modifying position? 
                // Simpler: Just Update normally, but draw at (x, y + scrollOffset * factor)
                // Let's make them move essentially based on time, but modify Y for drawing based on scroll

                p.x += p.vx;
                // Basic movement
                let drawnY = p.y - (scrollY * 0.2); // Parallax up as we scroll down

                // Interactive wrap around for infinite feel on the canvas relative to view
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Handle drawnY wrapping visually? 
                // For simplicity, let's just let them drift and apply parallax shift
                // If they go off screen due to parallax, maybe wrap? 
                // Let's stick to simple drift + slight shift.

                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const p2Y = p2.y - (scrollY * 0.2);

                    const dx = p.x - p2.x;
                    const dy = drawnY - p2Y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / connectionDistance})`; // Violet fade
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, drawnY);
                        ctx.lineTo(p2.x, p2Y);
                        ctx.stroke();
                    }
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, drawnY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = '#8b5cf6';
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Behind content
                opacity: 0.6, // Visibility control as requested (make it visible but not overwhelming)
                pointerEvents: 'none'
            }}
        />
    );
};

export default TechBackground;
