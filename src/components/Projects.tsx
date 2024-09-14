"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TechList from './TechList';
import ProjectCard from './ProjectCard';
import ProjetoLeticia from '@/assets/projeto_leticia.png';

export default function ProjectSection() {
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
    const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });
    const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true });

    const textControls = useAnimation();
    const techControls = useAnimation();
    const galleryControls = useAnimation();

    useEffect(() => {
        if (textInView) {
            textControls.start({ opacity: 1, x: 0 });
        } else {
            textControls.start({ opacity: 0, x: -50 });
        }
    }, [textInView, textControls]);

    useEffect(() => {
        if (techInView) {
            techControls.start({ opacity: 1, y: 0 });
        } else {
            techControls.start({ opacity: 0, y: 20 });
        }
    }, [techInView, techControls]);

    useEffect(() => {
        if (galleryInView) {
            galleryControls.start({ opacity: 1, scale: 1 });
        } else {
            galleryControls.start({ opacity: 0, scale: 0.95 });
        }
    }, [galleryInView, galleryControls]);

    return (
        <section id="projects" className="py-20 px-6 md:px-10 bg-gradient-to-r bg-lime-100 text-gray-800 border-b border-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={textControls}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-4 text-green-900"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Esses são alguns dos projetos que já trabalhei
                    </motion.h2>
                    <motion.p 
                        className="text-lg mb-10 text-green-900"
                        initial={{ opacity: 0, y: 30 }}
                        animate={textControls}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Ao longo do tempo, trabalhei em diversos projetos utilizando as seguintes tecnologias:
                    </motion.p>
                    
                    <TechList ref={techRef} controls={techControls} />
                </motion.div>

                <div ref={galleryRef} className="grid grid-cols-1 gap-6">
                    <motion.div
                        className="bg-yellow-50 p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={galleryControls}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <ProjectCard
                            image={ProjetoLeticia}
                            title="Landing Page para Fisioterapia"
                            description="Desenvolvido com o framework Next.js e TailWind CSS"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
