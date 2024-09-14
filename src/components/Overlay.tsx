"use client";

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type OverlayProps = {
    image: StaticImageData | null;
    onClose: () => void;
};

const Overlay: FC<OverlayProps> = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl p-4 bg-white rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
                    onClick={onClose}
                >
                    ×
                </button>
                <Image src={image} alt="Project" className="w-full h-auto rounded-lg" />
            </div>
        </motion.div>
    );
};

export default Overlay;
