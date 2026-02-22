"use client";
import { useEffect, useRef } from "react";
import styles from "./Aurora.module.css";

export default function Aurora({ colorStops = ["#3A29FF", "#06b6d4", "#3b82f6", "#8b5cf6"], speed = 0.5 }) {
    return (
        <div className={styles.auroraContainer}>
            <div
                className={styles.aurora}
                style={{
                    "--aurora-stop-1": colorStops[0] || "#3A29FF",
                    "--aurora-stop-2": colorStops[1] || "#06b6d4",
                    "--aurora-stop-3": colorStops[2] || "#3b82f6",
                    "--aurora-stop-4": colorStops[3] || "#8b5cf6",
                    "--aurora-speed": `${8 / speed}s`,
                }}
            >
                <div className={styles.auroraBlob + " " + styles.blob1}></div>
                <div className={styles.auroraBlob + " " + styles.blob2}></div>
                <div className={styles.auroraBlob + " " + styles.blob3}></div>
                <div className={styles.auroraBlob + " " + styles.blob4}></div>
            </div>
        </div>
    );
}
