"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ServiceCardProps = {
    title: string;
    description: string;
    delay: number;
};

export default function ServiceCard({ title, description, delay }: ServiceCardProps) {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 });
        } else {
            controls.start({ opacity: 0, scale: 0.9 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            className="bg-green-800 p-6 md:p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.6, delay }}
        >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-100">{title}</h3>
            <p className="text-green-300 text-base md:text-lg">{description}</p>
        </motion.div>
    );
}
