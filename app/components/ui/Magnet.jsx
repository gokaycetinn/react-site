"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnet({ children, padding = 60, strength = 0.3 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setPosition({
            x: (e.clientX - centerX) * strength,
            y: (e.clientY - centerY) * strength,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{ display: "inline-block" }}
        >
            {children}
        </motion.div>
    );
}
