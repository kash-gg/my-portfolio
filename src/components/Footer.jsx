import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import RevealText from './RevealText';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-header">
                        <RevealText delay={0.1}>
                            <h2 className="footer-title">Get In Touch</h2>
                        </RevealText>
                    </div>

                    <div className="footer-cta">
                        <RevealText delay={0.2}>
                            <p className="footer-description">
                                I'm always open to new opportunities, collaborations, and interesting projects.
                                <br />Feel free to reach out if you'd like to connect!
                            </p>
                        </RevealText>
                    </div>

                    <div className="footer-cards">
                        <RevealText delay={0.3}>
                            <div className="contact-methods">
                                <a href="mailto:gaudkashyup@gmail.com" className="contact-card card">
                                    <div className="contact-icon">
                                        <Mail size={32} />
                                    </div>
                                    <h3>Email</h3>
                                    <p>gaudkashyup@gmail.com</p>
                                </a>

                                <a href="https://github.com/kash-gg" target="_blank" rel="noopener noreferrer" className="contact-card card">
                                    <div className="contact-icon">
                                        <Github size={32} />
                                    </div>
                                    <h3>GitHub</h3>
                                    <p>@kash-gg</p>
                                </a>

                                <a href="https://www.linkedin.com/in/kashyup-gaud-865a50186/" target="_blank" rel="noopener noreferrer" className="contact-card card">
                                    <div className="contact-icon">
                                        <Linkedin size={32} />
                                    </div>
                                    <h3>LinkedIn</h3>
                                    <p>Kashyup Gaud</p>
                                </a>
                            </div>
                        </RevealText>
                    </div>

                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>&copy; {currentYear} Kashyup Gaud. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
