import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: 'fa-brands fa-java' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf' },
        { name: 'Microservices', icon: 'fa-solid fa-network-wired' },
        { name: 'React', icon: 'fa-brands fa-react' },
        { name: 'Docker', icon: 'fa-brands fa-docker' },
        { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
        { name: 'AWS', icon: 'fa-brands fa-aws' },
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
    ];

    return (
        <section id="skills" class="section">
            <div class="container">
                <motion.h2
                    class="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Skills
                </motion.h2>
                <div class="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            class="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <i class={skill.icon}></i>
                            <h3>{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
