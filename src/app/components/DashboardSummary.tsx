"use client";

import { motion } from "framer-motion";

export default function DashboardSummary() {
  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md">
      {/* Animated Header */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-gray-800 text-center "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Zettabyte Dashboard
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600 text-center ">
        Manage posts, users, and more with a clean, modern UI.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <motion.div
          className="p-4 bg-indigo-100 rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold text-indigo-700">Posts</h3>
          <p className="text-2xl font-bold">120</p>
        </motion.div>

        <motion.div
          className="p-4 bg-green-100 rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold text-green-700">Users</h3>
          <p className="text-2xl font-bold">80</p>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-100 rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-lg font-semibold text-yellow-700">Comments</h3>
          <p className="text-2xl font-bold">300</p>
        </motion.div>
      </div>
    </section>
  );
}
