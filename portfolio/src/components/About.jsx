import React from 'react';
import './About.css';
import SectionWrapper from './SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Education</h3>
                        <div className="education-card">
                            <div className="education-header">
                                <h4>Symbiosis Institute of Technology, Pune</h4>
                                <span className="year">2023 - 2027 (expected)</span>
                            </div>
                            <p className="degree">B.Tech in Computer Science</p>
                            <p className="coursework">
                                <strong>Relevant Coursework:</strong> Data Structures, Web Development, Machine Learning
                            </p>
                        </div>

                        <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Research Interests</h3>
                        <div className="interests">
                            <span className="interest-tag">Artificial Intelligence</span>
                            <span className="interest-tag">Machine Learning</span>
                            <span className="interest-tag">Deep Learning</span>
                            <span className="interest-tag">Blockchain</span>
                            <span className="interest-tag">Computer Vision</span>
                        </div>

                        <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Additional Information</h3>
                        <div className="additional-info">
                            <p>🌍 <strong>Languages:</strong> Fluent in English, Hindi and Marathi</p>
                            <p>🎯 <strong>Passion:</strong> Enthusiastic about real-world research with societal impact</p>
                            <p>🤝 <strong>Collaboration:</strong> Open to interdisciplinary projects in AI and technology for good</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
