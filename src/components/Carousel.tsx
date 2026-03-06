"use client";

import { motion } from "framer-motion";
import React from "react";

interface CarouselProps {
    items: React.ReactNode[];
    speed?: number; // seconds for a full loop
    direction?: "left" | "right";
}

export function Carousel({ items, speed = 40, direction = "left" }: CarouselProps) {
    // Duplicate items to ensure smooth infinite scroll
    const repeatedItems = [...items, ...items, ...items];

    const animateTo = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="overflow-hidden w-full relative flex whitespace-nowrap group">
            <motion.div
                className="flex gap-8 px-4"
                animate={{
                    x: animateTo,
                }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                }}
            >
                {repeatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 group-hover:[animation-play-state:paused]"
                        style={{
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
