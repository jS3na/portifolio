"use client";

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const techs = [
    { icon: <SiNextdotjs className="w-8 h-8 mr-2 text-blue-500" />, name: 'Next.js' },
    { icon: <SiTailwindcss className="w-8 h-8 mr-2 text-blue-400" />, name: 'Tailwind CSS' },
    { icon: <FaReact className="w-8 h-8 mr-2 text-blue-600" />, name: 'React.js' },
    { icon: <FaHtml5 className="w-8 h-8 mr-2 text-orange-600" />, name: 'HTML' },
    { icon: <FaCss3Alt className="w-8 h-8 mr-2 text-blue-500" />, name: 'CSS' },
    { icon: <FaJsSquare className="w-8 h-8 mr-2 text-yellow-500" />, name: 'JavaScript' },
];

type TechListProps = {
    controls: any;
};

const TechList = forwardRef<HTMLUListElement, TechListProps>(({ controls }, ref) => {
    return (
        <motion.ul
            ref={ref}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            {techs.map((tech, index) => (
                <li key={index} className="text-xl flex items-center text-green-900">
                    {tech.icon}
                    {tech.name}
                </li>
            ))}
        </motion.ul>
    );
});

export default TechList;
