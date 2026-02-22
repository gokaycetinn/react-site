"use client";
import { motion } from "framer-motion";

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.25, 0.1, 0.25, 1],
  threshold = 0.1,
  onLetterAnimationComplete,
}) {
  const letters = text.split("");

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={animationFrom}
          whileInView={animationTo}
          viewport={{ once: true, amount: threshold }}
          transition={{
            duration: 0.5,
            delay: delay + index * duration,
            ease: easing,
          }}
          onAnimationComplete={
            index === letters.length - 1
              ? onLetterAnimationComplete
              : undefined
          }
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
