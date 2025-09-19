"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-3 py-1 bg-blue-500 text-white rounded"
    >
      Login with Google
    </button>
  );
}
