import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/images/avatar.png';

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4">
            {/* Avatar */}
            <motion.img
                src={avatar}
                alt="Arti Lanke Avatar"
                className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-xl mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />
            {/* Name */}
            <motion.h1
                className="text-3xl md:text-5xl font-bold text-cyan-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Hi, I'm Arti Lanke
            </motion.h1>

            {/* Tagline */}
            <motion.p
                className="text-lg text-zinc-400 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                Game Developer | Unity | C++ | C# | SQL
            </motion.p>
        </section>
    );
};