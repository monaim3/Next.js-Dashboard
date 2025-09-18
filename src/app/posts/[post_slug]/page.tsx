"use client";
import { Loading } from "@/app/components/Loading";
import { useFetch } from "@/app/hooks/useFetch";
import { Post } from "@/app/types/post";
import { notFound } from "next/navigation";

export default function PostDetail({ params }: { params: { post_slug: string } }) {
    console.log("params", params.post_slug);
  const { data, loading, error } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${params.post_slug}`);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-600">Failed to load post: {error}</div>;
  if (!data) return notFound();

  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.body}</p>
    </article>
  );
}
