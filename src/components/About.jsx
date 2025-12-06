import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" class="about section">
            <div class="container">
                <motion.h2
                    class="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <div class="about-content">
                    <motion.div
                        class="about-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            I am a dedicated <strong>Software Engineer</strong> specializing in backend development with <strong>Java</strong> and <strong>Spring Boot</strong>, complemented by a strong command of modern frontend technologies like <strong>React.js</strong>. My expertise lies in designing and building scalable, high-performance distributed systems and robust RESTful APIs.
                        </p>
                        <p>
                            With a solid foundation in <strong>Object-Oriented Programming (OOP)</strong> and <strong>Microservices Architecture</strong>, I am committed to writing clean, maintainable, and efficient code. I thrive in collaborative environments where I can tackle complex algorithmic challenges, optimize database performance, and deliver software solutions that drive real business value.
                        </p>
                        <p>
                            I am constantly learning and adapting to specific technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape. My goal is to leverage my technical skills to create impactful, secure, and user-centric digital experiences.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
