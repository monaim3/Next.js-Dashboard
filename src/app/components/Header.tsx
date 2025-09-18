
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: "Users", path: "/users" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Zettabyte
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Hi, {session.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white shadow-md px-4 py-3 space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            {!session ? (
              <button
                onClick={() => signIn("google")}
                className="w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Sign In
              </button>
            ) : (
              <div className="mt-2 space-y-2">
                <span className="block text-gray-700">
                  Hi, {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="w-full px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
