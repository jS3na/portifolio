"use client";

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type ProjectCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    onClick: () => void; // New prop for handling clicks
};

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, onClick }) => {
    return (
        <motion.div
            className="bg-yellow-50 p-4 rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            onClick={onClick}
        >
            <Image src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4 shadow-md" />
            <h3 className="text-xl font-bold mb-2 text-green-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default ProjectCard;
