import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import TechBackground from './TechBackground';

const Hero = () => {
    return (
        <section id="home" class="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <TechBackground />
            <div class="container hero-container" style={{ position: 'relative', zIndex: 1, gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <motion.div
                    class="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <p class="greeting">Hello, I'm</p>
                    <h1 class="name">Akash Raj</h1>
                    <h2 class="title">
                        <TypeAnimation
                            sequence={[
                                'Java Backend Developer',
                                2000,
                                'Spring Boot Expert',
                                2000,
                                'React.js Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            class="typing-text"
                            repeat={Infinity}
                        />
                    </h2>
                    <p class="bio">I build scalable and efficient backend systems using Java, Spring, Spring Boot, and React.js.</p>
                    <div class="cta-group">
                        <a href="#projects" class="btn btn-primary">View Work</a>
                        <a href="#contact" class="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
