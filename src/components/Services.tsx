"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
    const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
    const { ref: pRef, inView: pInView } = useInView({ triggerOnce: true });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

    const h2Controls = useAnimation();
    const pControls = useAnimation();
    const divControls = useAnimation();

    useEffect(() => {
        if (h2InView) {
            h2Controls.start({ opacity: 1, y: 0 });
        } else {
            h2Controls.start({ opacity: 0, y: -50 });
        }
    }, [h2InView, h2Controls]);

    useEffect(() => {
        if (pInView) {
            pControls.start({ opacity: 1, y: 0 });
        } else {
            pControls.start({ opacity: 0, y: 20 });
        }
    }, [pInView, pControls]);

    useEffect(() => {
        if (divInView) {
            divControls.start({ opacity: 1, scale: 1 });
        } else {
            divControls.start({ opacity: 0, scale: 0.9 });
        }
    }, [divInView, divControls]);

    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-r from-green-900 to-green-600 text-green-100 border-b border-green-700">
            <div className="max-w-7xl mx-auto text-center">
                
                <motion.h2 
                    ref={h2Ref}
                    className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={h2Controls}
                    transition={{ duration: 0.6 }}
                >
                    Meus Serviços
                </motion.h2>
                
                <motion.p 
                    ref={pRef}
                    className="text-lg md:text-xl mb-12 md:mb-16 text-green-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={pControls}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Ofereço soluções completas e personalizadas para sua empresa, desde o design até o desenvolvimento.
                </motion.p>

                <div ref={divRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    <ServiceCard 
                        title="Design UI/UX" 
                        description="Criação de interfaces atraentes e funcionais, focadas em proporcionar a melhor experiência de usuário." 
                        delay={0.6}
                    />
                    <ServiceCard 
                        title="Desenvolvimento Web" 
                        description="Desenvolvimento de sites modernos, responsivos e otimizados, utilizando as tecnologias mais recentes." 
                        delay={0.8}
                    />
                    <ServiceCard 
                        title="Desenvolvimento Mobile" 
                        description="Aplicativos móveis nativos e híbridos, com performance e design que encantam seus usuários." 
                        delay={1}
                    />
                </div>
            </div>
        </section>
    );
}
