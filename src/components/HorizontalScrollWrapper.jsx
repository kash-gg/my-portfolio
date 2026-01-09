import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollWrapper = ({ children }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <div id="horizontal-wrapper" ref={targetRef} className="relative h-[400vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScrollWrapper;
