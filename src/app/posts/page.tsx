"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { Post } from "../../types/post";
import PostCard from "../../components/PostCard";
import { Loading } from "../../components/Loading";

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false);
  const { data, loading, error, refetch } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex gap-2">
        <button 
        onClick={() => refetch(false)} 
        className="px-5 py-2 rounded-xl bg-[#4F39F6] text-white font-medium shadow-md hover:bg-blue-700 transition duration-200"
        >
        Refetch
        </button>

        <button 
        onClick={() => refetch(true)} 
        className="px-5 py-2 rounded-xl bg-red-600 text-white font-medium shadow-md hover:bg-red-700 transition duration-200 ml-3"
        >
        Simulate Error
        </button>

        </div>
      </div>

      {loading && <Loading />}
      {error && <div className="text-red-600">Failed to load posts: {error}</div>}

      {data && (
        <motion.div initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {data.map((p, i) => <PostCard key={p.id} post={p} index={i} />)}
        </motion.div>
      )}
    </div>
  );
}
