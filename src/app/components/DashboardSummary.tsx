"use client";

import { motion } from "framer-motion";

export default function DashboardSummary() {
  return (
    <section className="w-full p-6 bg-white rounded-2xl shadow-md">
    

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
