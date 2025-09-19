"use client";
import { motion } from "framer-motion";
import Banner from "../asset/banner.jpg";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px", // you can also use 'h-screen' for full viewport
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          className="text-2xl md:text-5xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Zettabyte Dashboard
        </motion.h1>

        <p className="mt-2 text-lg md:text-xl">
          Manage posts, users, and more with a clean, modern UI.
        </p>
      </div>
    </div>
  );
};

export default Hero;
