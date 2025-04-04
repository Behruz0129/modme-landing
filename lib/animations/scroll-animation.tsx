"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    threshold?: number;
    className?: string;
}

const ScrollAnimation = ({
    children,
    direction = "up",
    delay = 0,
    threshold = 0.1,
    className,
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    const variants = {
        up: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        },
        down: {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
        },
        left: {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
        },
        right: {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants[direction]}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay }}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
