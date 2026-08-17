"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

export function Reveal({ children, className = "", delay = 0, amount = 0.25 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticLink({
  children,
  className = "",
  href,
  external = false,
  ariaLabel,
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.13);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.13);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </motion.a>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function HeroPaths() {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const pointer = { x: 0.72, y: 0.42, active: false };
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const styles = getComputedStyle(canvas);
      const stroke = styles.getPropertyValue("--path-stroke").trim() || "rgba(255,255,255,.18)";
      const px = pointer.x * width;
      const py = pointer.y * height;

      for (let index = 0; index < 17; index += 1) {
        const ratio = index / 16;
        const wave = reduceMotion ? 0 : Math.sin(time * 0.00045 + index * 0.56) * 12;
        const startY = height * (0.1 + ratio * 0.82);
        const endY = height * (0.18 + ratio * 0.62) + wave;
        const pullX = pointer.active ? px * 0.12 : width * 0.08;
        const pullY = pointer.active ? (py - height / 2) * 0.08 : 0;

        context.beginPath();
        context.moveTo(width * 0.03, startY);
        context.bezierCurveTo(
          width * 0.3 + pullX,
          startY - height * 0.11,
          width * 0.62,
          endY + height * 0.12 + pullY,
          width * 0.97,
          endY
        );
        context.strokeStyle = stroke;
        context.globalAlpha = 0.16 + (1 - Math.abs(ratio - 0.5) * 1.6) * 0.2;
        context.lineWidth = index % 4 === 0 ? 1.35 : 0.75;
        context.stroke();
      }
      context.globalAlpha = 1;

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    resize();
    draw(0);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="hero-paths" aria-hidden="true" />;
}

export function KineticGrid() {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const pointer = { x: -1000, y: -1000 };
    const ripples = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const styles = getComputedStyle(canvas);
      const line = styles.getPropertyValue("--grid-line").trim() || "rgba(255,255,255,.12)";
      const accent = styles.getPropertyValue("--grid-accent").trim() || "rgba(200,239,91,.7)";
      const spacing = width < 700 ? 42 : 54;

      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const distance = Math.hypot(dx, dy);
          const influence = reduceMotion ? 0 : Math.max(0, 1 - distance / 170);
          const offsetX = distance ? (-dx / distance) * influence * 16 : 0;
          const offsetY = distance ? (-dy / distance) * influence * 16 : 0;
          const px = x + offsetX;
          const py = y + offsetY;

          context.beginPath();
          context.arc(px, py, 1.2 + influence * 1.8, 0, Math.PI * 2);
          context.fillStyle = influence > 0.45 ? accent : line;
          context.fill();
        }
      }

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        ripple.radius += 3.5;
        ripple.alpha -= 0.018;
        context.beginPath();
        context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        context.strokeStyle = accent;
        context.globalAlpha = Math.max(0, ripple.alpha);
        context.lineWidth = 1;
        context.stroke();
        context.globalAlpha = 1;
        if (ripple.alpha <= 0) ripples.splice(index, 1);
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const onPointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };
    const onPointerDown = (event) => {
      if (reduceMotion) return;
      const bounds = canvas.getBoundingClientRect();
      ripples.push({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        radius: 4,
        alpha: 0.8,
      });
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw();
    });
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("pointerdown", onPointerDown);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="kinetic-canvas" aria-hidden="true" />;
}
