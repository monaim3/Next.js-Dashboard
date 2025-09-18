"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading…</p>;
  if (!session) {
    router.push("/"); // redirect if not logged in
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-2">Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Profile picture"
          className="w-16 h-16 rounded-full mt-4"
        />
      )}
    </div>
  );
}
