'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImagemSena from '@/assets/imagem_sena.jpg';

export default function HeroSection() {
    const handleWhatsAppClick = () => {
        const url = `https://wa.me/86989030943?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços.')}`;
        window.open(url, '_blank');
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-around py-10 px-5 md:py-20 md:px-10 bg-gradient-to-r from-green-900 to-green-600 text-gray-100 border-b border-green-700">
            
            <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
                <motion.h3
                    className="text-xl md:text-2xl text-green-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    👋 Olá! Sou <span className="font-bold text-green-100">João Gabriel</span>
                </motion.h3>
                
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold my-4 text-green-100 leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Potencializando marcas com sites personalizados e altamente conversivos
                </motion.h1>

                <motion.p
                    className="text-base md:text-lg text-green-200 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Criando sites que são atraentes, fiéis à identidade da marca e fáceis de usar.
                </motion.p>

                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                    <motion.a
                        href="#services"
                        className="inline-block bg-green-700 text-green-100 py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Conheça meus serviços   
                    </motion.a>

                    <motion.a
                        onClick={handleWhatsAppClick}
                        className="inline-block bg-green-100 text-green-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-300 transition transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Entre em contato
                    </motion.a>
                </div>
            </div>

            <motion.div
                className="w-full md:w-auto flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <Image src={ImagemSena} alt="João Gabriel" className="w-full md:w-[450px] h-auto rounded-xl shadow-2xl object-cover"/>
            </motion.div>
        </section>
    );
}
