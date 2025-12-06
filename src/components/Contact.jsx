import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" class="contact section">
            <div class="container">
                <motion.h2
                    class="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    class="contact-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I'm currently looking for new opportunities. Whether you have a question or just
                    want to say hi, I'll try my best to get back to you!
                </motion.p>
                <motion.a
                    href="mailto:your.email@example.com"
                    class="btn btn-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Say Hello
                </motion.a>
                <div class="social-links">
                    <a href="https://github.com/AkashRajSarraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                    <a href="https://linkedin.com/in/akashrajsarraf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://twitter.com/AkashRajSarraf" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
