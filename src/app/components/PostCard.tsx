import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "../types/post";

const item = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export default function PostCard({ post, index }: { post: Post; index: number }) {
    return (
        <motion.article
            layout
            initial="hidden"
            animate="visible"
            variants={item}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="border p-4 rounded-lg"
        >
            <Link href={`/posts/${post.id}`} className="block">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm mt-2 line-clamp-3 text-slate-600">{post.body}</p>
            </Link>

        </motion.article>
    );
}
