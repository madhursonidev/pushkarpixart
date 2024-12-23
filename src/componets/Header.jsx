"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <header className="fixed top-1 p-5 left-0 z-50 w-full bg-black bg-opacity-80 backdrop-filter _backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold"
        >
          Pushker PixArt
        </motion.h1>
      </header>
    </div>
  );
};

export default Header;
