'use client';
import ImagemSena from '@/assets/imagem_sena.jpg';
import Image from 'next/image';

export default function HeroSection() {

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/86989030943?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os atendimentos.')}`;
        window.open(url, '_blank');
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-around max-h-screen py-10 px-5 md:py-20 md:px-10 bg-gradient-to-r from-green-900 to-green-600 text-gray-100 border-b border-green-700">
            
            {/* Texto e Chamada para Ação */}
            <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
                <h3 className="text-xl md:text-2xl text-green-300">
                    👋 Olá! Sou <span className="font-bold text-green-100">João Gabriel</span>
                </h3>
                
                <h1 className="text-3xl md:text-5xl font-extrabold my-4 text-green-100 leading-tight">
                    Potencializando marcas com sites personalizados e altamente conversivos
                </h1>

                <p className="text-base md:text-lg text-green-200 mb-8 leading-relaxed">
                    Criando sites que são atraentes, fiéis à identidade da marca e fáceis de usar.
                </p>

                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                    <a href="#services" className="inline-block bg-green-700 text-green-100 py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105">
                        Conheça meus serviços   
                    </a>

                    <a onClick={handleWhatsAppClick} className="inline-block bg-green-100 text-green-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-300 transition transform hover:scale-105">
                        Entre em contato
                    </a>
                </div>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
                <Image src={ImagemSena} alt="João Gabriel" className="w-full md:w-[450px] h-auto rounded-xl shadow-2xl object-cover"/>
            </div>
        </section>
    );
}
