import React from 'react';
import './Certifications.css';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
    const certifications = [
        {
            title: 'Supervised Machine Learning: Regression and Classification',
            provider: 'Stanford Online (DeepLearning.AI)',
            year: '2025'
        },
        {
            title: 'Introduction to Generative AI',
            provider: 'Google Cloud',
            year: '2025'
        },
        {
            title: 'C Programming',
            provider: 'Udemy',
            year: '2023'
        }
    ];

    return (
        <SectionWrapper id="certifications" className="certifications section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="certifications-grid grid grid-2">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card card">
                            <div className="cert-icon">🏆</div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-provider">{cert.provider}</p>
                            <span className="cert-year">{cert.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
