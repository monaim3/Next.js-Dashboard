"use client";
import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Heart, Share2, Bookmark } from 'lucide-react';
import { Loading } from "@/components/Loading";
import { useFetch } from "@/hooks/useFetch";
import { Post } from "@/types/post";
import { notFound } from "next/navigation";
import Link from 'next/link';

export default function PostDetail({ params }: { params: { post_slug: string } }) {
  const { data, loading, error } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${params.post_slug}`);

  if (loading) return <Loading />;

  if (error) return <div className="text-red-600">Failed to load post: {error}</div>;
  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
         <Link href="/posts">
           <button className="inline-flex items-center space-x-2 text-slate-600 hover:text-[#4F39F6] transition-colors duration-200 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to posts</span>
          </button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Main Content Card */}
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-[#4F39F6] via-purple-500 to-indigo-600"></div>
          
          <div className="p-8 lg:p-12">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {data.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Post #{data.id}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Published</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{Math.ceil(data.body.length / 200)} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center space-x-4">
                <button className="inline-flex items-center space-x-2 px-4 py-2 bg-[#4F39F6] text-white rounded-full hover:bg-[#4F39F6]/90 transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Like</span>
                </button>
                <button className="inline-flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-full hover:bg-slate-50 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
              <button className="p-2 text-slate-400 hover:text-[#4F39F6] transition-colors duration-200">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-[#4F39F6] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                {data.body}
              </p>
            </div>

          </div>
        </article>
          </div>
        </div>  
    
  )
}