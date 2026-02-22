"use client";
import styles from "./TextShimmer.module.css";

export default function TextShimmer({ children, className = "", speed = 3 }) {
    return (
        <span
            className={`${styles.shimmer} ${className}`}
            style={{ "--shimmer-speed": `${speed}s` }}
        >
            {children}
        </span>
    );
}
