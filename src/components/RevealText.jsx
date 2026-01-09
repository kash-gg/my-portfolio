import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealText = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={`reveal-text-container ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : { y: "100%" }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for "premium" feel
                    delay: delay
                }}
                style={{ display: "block" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealText;
