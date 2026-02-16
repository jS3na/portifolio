"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import TechList from "./TechList";
import ProjectCard from "./ProjectCard";
import Overlay from "./Overlay";

import ProjetoLeticia from "../assets/projeto_leticia.png";
import ProjetoRealEstate from "../assets/real_estate.png";
import ProjetoGrupoFabrica from "../assets/landing_grupofabrica.png";
import ProjetoDoutoraBiotec from "../assets/projeto_doutorabiotec.png";

import { StaticImageData } from "next/image";

export default function ProjectSection() {
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
    const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });
    const { ref: galleryRef } = useInView({ triggerOnce: true });

    const textControls = useAnimation();
    const techControls = useAnimation();

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

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
    };
    const handleCloseOverlay = () => {
        setSelectedImage(null);
    };

    return (
        <section id="projects" className="py-20 px-6 md:px-10 bg-lime-100 text-gray-800 border-b border-black">
            <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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

                <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard
                        image={ProjetoLeticia}
                        title="Landing Page para Fisioterapia"
                        description="Desenvolvido com o framework Next.js e TailWind CSS"
                        onClick={() => handleImageClick(ProjetoLeticia)}
                    />
                    <ProjectCard
                        image={ProjetoRealEstate}
                        title="Aplicativo para Imobiliária"
                        description="Desenvolvido com o framework React Native, consumindo a API do Firebase e do Clerk"
                        onClick={() => handleImageClick(ProjetoRealEstate)}
                    />
                    <ProjectCard
                        image={ProjetoGrupoFabrica}
                        title="Landing Page para empresa de eventos"
                        description="Desenvolvido com o framework Next.js e TailWind CSS"
                        onClick={() => handleImageClick(ProjetoGrupoFabrica)}
                    />
                    <ProjectCard
                        image={ProjetoDoutoraBiotec}
                        title="Site de notícias e publicações de lâminas de análises clínicas."
                        description="Desenvolvido com o framework Next.js, TailWind CSS e com uma API feita em Flask"
                        onClick={() => handleImageClick(ProjetoDoutoraBiotec)}
                    />
                </div>
            </div>

            <Overlay image={selectedImage} onClose={handleCloseOverlay} />
                
        </section>
    );
}
