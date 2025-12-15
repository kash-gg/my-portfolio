import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className, id, delay = 0 }) => {
    return (
        <motion.div
            id={id}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                type: "spring",
                stiffness: 50
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
