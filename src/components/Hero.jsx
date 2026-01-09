import React from 'react';
import RevealText from './RevealText';
import SectionWrapper from './SectionWrapper';
import Lanyard from './Lanyard';
import Beams from './Beams';
import './Hero.css';

const Hero = () => {
    return (
        <SectionWrapper id="home" className="hero section" delay={0.1}>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-text">
                            <RevealText delay={0.1}>
                                <h1 className="hero-title">Kashyup Gaud</h1>
                            </RevealText>

                            <RevealText delay={0.2}>
                                <h2 className="hero-subtitle">
                                    Computer Science Student & Tech Enthusiast
                                </h2>
                            </RevealText>

                            <RevealText delay={0.3}>
                                <p className="hero-description">
                                    Specializing in Machine Learning, Blockchain, and Web Development.
                                </p>
                            </RevealText>

                            <RevealText delay={0.4}>
                                <div className="hero-cta">
                                    <a href="#projects" className="btn btn-primary">
                                        View Projects
                                    </a>
                                    <a href="#contact" className="btn btn-secondary">
                                        Contact
                                    </a>
                                </div>
                            </RevealText>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </div>
                </div>
            </div>

            <div className="hero-background-effects">
                <div className="beams-wrapper" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                    <Beams
                        beamWidth={2}
                        beamHeight={15}
                        beamNumber={12}
                        lightColor="#ffffff"
                        speed={2}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={0}
                    />
                </div>
                <div className="grid-overlay" style={{ opacity: 0.5, zIndex: 1 }}></div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
