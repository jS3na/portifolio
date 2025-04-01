"use client";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaPython, FaGitAlt, FaJava, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFlutter } from 'react-icons/si';

type ContactProps = {
    Icon: React.ElementType;
    title: string;
    link: string;
}

type SkillProps = {
    Icon: React.ElementType;
    title: string;
}

const Skills = ({ Icon, title }: SkillProps) => (
    <motion.div
        className="flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <Icon className="w-12 h-12 text-gray-800" />
        <span className="mt-2 text-lg">{title}</span>
    </motion.div>
);

const ContactCard = ({ Icon, link, title }: ContactProps) => (
    <div className="p-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <Icon className="w-12 h-12 text-gray-800" />
            <span className="mt-2 text-lg">{title}</span>
        </a>
    </div>
);

export default function About() {
    return (
        <section className="py-20 bg-lime-50 text-gray-700">
            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    className="text-4xl font-extrabold mb-10 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Sobre Mim
                </motion.h2>

                {/* Habilidades */}
                <motion.div
                    className="mb-16"
                    id="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">Habilidades</h3>

                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        <Skills Icon={FaHtml5} title='HTML' />
                        <Skills Icon={FaCss3Alt} title='CSS' />
                        <Skills Icon={FaJsSquare} title='JavaScript' />
                        <Skills Icon={SiTypescript} title='TypeScript' />
                        <Skills Icon={FaReact} title='React' />
                        <Skills Icon={SiNextdotjs} title='Next.js' />
                        <Skills Icon={SiFlutter} title='Flutter' />
                        <Skills Icon={FaPhp} title='PHP' />
                        <Skills Icon={FaPython} title='Python' />
                        <Skills Icon={FaJava} title='Java' />
                        <Skills Icon={FaGitAlt} title='Git' />
                    </div>
                </motion.div>

                {/* Sobre */}
                <motion.div
                    id="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-bold mb-6 text-center">Sobre</h3>
                    <p className="text-lg mb-4 text-center">
                    Sou desenvolvedor FullStack com experiência em PHP, utilizando frameworks como Laravel e CodeIgniter,
                    além de desenvolvimento backend em Python com Flask. Também atuo na criação de aplicações web modernas com Next.js e React.js e
                    no desenvolvimento mobile com os frameworks React Native e Ionic. Tenho experiência no desenvolvimento de sistemas robustos,
                    integrando back-end e front-end para soluções eficientes.
                    </p>

                </motion.div>

                {/* Contato */}
                <motion.div
                    id="contact"
                    className="flex md: flex-col mt-16 text-center justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-bold mb-6">Contato</h3>
                    <div className="flex flex-col md:flex-row justify-start gap-6">
                        <ContactCard
                            Icon={FaEnvelope}
                            link="mailto:passosjoaogabriel29@gmail.com"
                            title="Email"
                        />
                        <ContactCard
                            Icon={FaGithub}
                            link="https://github.com/js3na"
                            title="GitHub"
                        />
                        <ContactCard
                            Icon={FaWhatsapp}
                            link="https://wa.me/86989030943"
                            title="WhatsApp"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
