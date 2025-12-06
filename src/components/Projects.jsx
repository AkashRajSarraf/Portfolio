import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with cart functionality, user authentication, and payment gateway integration.',
            tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'Task Management App',
            description: 'A productivity tool for managing daily tasks with drag-and-drop functionality and real-time updates.',
            tags: ['Vue.js', 'Firebase', 'Tailwind'],
        },
        {
            title: 'Weather Dashboard',
            description: 'A weather forecasting application that provides real-time data and visualizes trends using charts.',
            tags: ['JavaScript', 'API Integration', 'Chart.js'],
        },
    ];

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    return (
        <section id="projects" class="section">
            <div class="container">
                <motion.h2
                    class="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <div class="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            class="project-card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <div class="project-image">
                                <div class="placeholder-img"></div>
                            </div>
                            <div class="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div class="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                                <div class="project-links">
                                    <a href="#" target="_blank"><i class="fa-brands fa-github"></i> Code</a>
                                    <a href="#" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
