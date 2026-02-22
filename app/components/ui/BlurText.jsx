"use client";
import { motion } from "framer-motion";

export default function BlurText({
    text,
    className = "",
    delay = 0,
    duration = 0.8,
}) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: duration,
                        delay: delay + index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}
