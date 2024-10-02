"use client";

import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ProjectCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const animationControls = useAnimation();

    useEffect(() => {
        if (inView) {
            animationControls.start({ opacity: 1, scale: 1 });
        } else {
            animationControls.start({ opacity: 0, scale: 0.95 });
        }
    }, [inView, animationControls]);

    return (
        <motion.div
            ref={ref}
            className="bg-yellow-50 p-4 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={animationControls}
            transition={{ duration: 0.6 }}
        >
            <Image src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4 shadow-md" />
            <h3 className="text-xl font-bold mb-2 text-green-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default ProjectCard;
