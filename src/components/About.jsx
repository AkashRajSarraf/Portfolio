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
                        <p>I am a passionate Software Engineer with a strong focus on creating efficient and scalable
                            solutions. With a deep understanding of modern web technologies, I strive to build
                            applications that not only look great but also perform flawlessly.</p>
                        <p>My journey in tech has been driven by curiosity and a desire to solve complex problems.
                            Whether it's optimizing backend logic or crafting intuitive user interfaces, I enjoy every
                            aspect of the development process.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
