import React from 'react';
import './Projects.css';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
    const projects = [
        {
            title: 'Self-Sovereign Identity (SSI) Mobile App',
            year: '2025',
            description: 'A mobile application for Academic Credential Verification using Decentralized Identity (DID) principles.',
            highlights: [
                'DID generation and wallet management',
                'Verifiable Credentials & Selective Disclosure',
                'Role-based ecosystem (Issuer, Holder, Verifier)'
            ],
            tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Hyperledger Aries'],
            link: 'https://github.com/kash-gg/Project_SSI'
        },
        {
            title: 'Fraud Detection using Blockchain and Machine Learning',
            year: '2024',
            description: 'Developed a prototype integrating ML models with blockchain to identify and track fraudulent transactions.',
            highlights: [
                'Data transparency and tamper-resistance',
                'Real-time detection capabilities',
                'Blockchain-based transaction tracking'
            ],
            tech: ['Python', 'Machine Learning', 'Blockchain', 'React']
        },
        {
            title: 'NGO Website - Zunj Divyang Sanstha',
            year: '2025',
            description: 'Full-stack website for an NGO with integrated payment gateway, admin panel, and blog system for specially-abled individuals.',
            highlights: [
                ' Secure Payment Gateway Integration',
                'Admin dashboard for content management',
                'Blog system with rich text editor',
                'Responsive design with modern UI/UX'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Gateway', 'Tailwind CSS']
        },
        {
            title: 'Pet Adoption Management System',
            year: 'March 2025',
            description: 'Desktop application to manage pet adoptions for animal shelters using Java and JavaFX.',
            highlights: [
                'Interactive GUI with JavaFX',
                'MVC architecture for maintainable code',
                'User action management with real-time updates'
            ],
            tech: ['Java', 'JavaFX', 'MVC', 'GUI Design']
        }
    ];

    return (
        <SectionWrapper id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid grid grid-3">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-year">{project.year}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-highlights">
                                {project.highlights.map((highlight, i) => (
                                    <div key={i} className="highlight-item">
                                        <span className="bullet">▹</span>
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
