"use client";

import { motion } from "framer-motion";
import ItemList from "./_components/ItemList";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-10 flex justify-center">
      <div className="max-w-screen-xl w-full">
        <motion.h1
          className="mb-8 text-3xl font-extrabold"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📚 포켓몬 도감
        </motion.h1>
        <ItemList />
      </div>
    </main>
  );
};

export default HomePage;
