"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Terminal, Code } from "lucide-react"
import ImagemSena from '@/assets/imagem_sena.jpg'

export default function HeroSection() {
    const handleWhatsAppClick = () => {
        const url = `https://wa.me/86989030943?text=${encodeURIComponent(
            "Olá! Gostaria de saber mais sobre os serviços."
        )}`
        window.open(url, "_blank")
    }

    return (
        <section className="relative overflow-hidden bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <motion.h1
                            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="block text-green-300">Olá! Sou</span>
                            <span className="block text-green-500">João Gabriel</span>
                        </motion.h1>
                        <motion.p
                            className="mt-3 text-base text-green-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Desenvolvedor Full Stack especializado em criar experiências web incríveis e altamente conversivas.
                        </motion.p>
                        <motion.div
                            className="mt-10 sm:flex sm:justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="rounded-md shadow">
                                <a
                                    href="#services"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-green-500 hover:bg-green-400 md:py-4 md:text-lg md:px-10 transition duration-300"
                                >
                                    <Code className="mr-2" /> Meus Serviços
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition duration-300"
                                >
                                    <Terminal className="mr-2" /> Fale Comigo
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                                <Image
                                    src={ImagemSena}
                                    alt="João Gabriel"
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </section>
    )
}