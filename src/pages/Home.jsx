import React from 'react';
import avatar from '../assets/images/avatar.png'; // Update path if different

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4">
            <img src={avatar} alt="Arti Lanke Avatar" className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-300">Hi, I'm Arti Lanke</h1>
            <p className="text-lg text-zinc-300 mt-2">Game Developer | Unity | C++ | C# | SQL</p>
        </section>
    );
};

export default Home;