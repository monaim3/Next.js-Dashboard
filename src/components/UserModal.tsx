import { motion, AnimatePresence } from "framer-motion";
import { User } from "../types/user";

export default function UserModal({ user, open, onClose }: { user?: User | null; open: boolean; onClose: ()=>void }) {
  return (
    <AnimatePresence>
      {open && user && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl w-11/12 max-w-md z-50"
          >
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="mt-2">{user.email}</p>
            <p className="mt-1 text-sm text-slate-600">{user.company?.name}</p>
            <div className="mt-4 flex justify-end">
              <button onClick={onClose} className="px-3 py-1 rounded bg-[#4F39F6] text-white">Close</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
