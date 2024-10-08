"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

type NavProps = {
    link: string
    title: string
}

const NavLink = ({ link, title }: NavProps) => (
    <a
        href={link}
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 px-2 py-1 text-sm font-medium"
    >
        {title}
    </a>
)

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-lime-100 backdrop-blur-md w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-gray-900 text-xl font-semibold">
                            João Gabriel Sena
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink link="#projects" title="Projetos" />
                        <NavLink link="#services" title="Serviços" />
                        <NavLink link="#skills" title="Habilidades" />
                        <NavLink link="#about" title="Sobre" />
                        <NavLink link="#contact" title="Contato" />
                    </div>

                    <div className="md:hidden">
                        <button
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink link="#projects" title="Projetos" />
                        <NavLink link="#services" title="Serviços" />
                        <NavLink link="#skills" title="Habilidades" />
                        <NavLink link="#about" title="Sobre" />
                        <NavLink link="#contact" title="Contato" />
                    </div>
                </div>
            )}
        </nav>
    )
}