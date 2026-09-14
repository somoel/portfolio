"use client";

import { motion } from "motion/react";

const easing = [0.22, 1, 0.36, 1] as const;

export function AnimatedHeadline({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "p";
}) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <motion.span
            data-motion
            className={`inline-block ${wordClassName}`}
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.95,
              delay: delay + index * stagger,
              ease: easing,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
