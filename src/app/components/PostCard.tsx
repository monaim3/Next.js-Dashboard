// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Post } from "../types/post";

// const item = {
//     hidden: { opacity: 0, y: 10, scale: 0.98 },
//     visible: { opacity: 1, y: 0, scale: 1 },
// };

// export default function PostCard({ post, index }: { post: Post; index: number }) {
//     return (
//         <motion.article
//             layout
//             initial="hidden"
//             animate="visible"
//             variants={item}
//             transition={{ duration: 0.35, delay: index * 0.06 }}
//             whileHover={{ scale: 1.02 }}
//             className="border p-4 rounded-lg"
//         >
//             <Link href={`/posts/${post.id}`} className="block">
//                 <h3 className="font-semibold text-lg">{post.title}</h3>
//                 <p className="text-sm mt-2 line-clamp-3 text-slate-600">{post.body}</p>
//             </Link>

//         </motion.article>
//     );
// }


import { motion } from "framer-motion";
import { Post } from "../types/post";
import Link from "next/link";

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export default function PostCard({ post, index }: { post: Post; index: number }) {
    return (
        <motion.article
            layout
            initial="hidden"
            animate="visible"
            variants={item}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F39F6]/0 to-[#4F39F6]/0 group-hover:from-[#4F39F6]/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
            
            <Link href={`/posts/${post.id}`} className="block p-6 relative z-10">

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.body}
                </p>
            </Link>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F39F6] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.article>
    );
}