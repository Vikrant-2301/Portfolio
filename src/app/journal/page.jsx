"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "The Death of Ornamentation",
    excerpt: "Why modern minimalism is failing to connect with human emotion.",
    date: "Oct 2024",
    readTime: "5 min read",
    image: "/assets/9.jpg",
    category: "Theory",
  },
  {
    id: 2,
    title: "Generative Spaces",
    excerpt:
      "Using algorithms to design floor plans that adapt to user behavior.",
    date: "Sep 2024",
    readTime: "8 min read",
    image: "/assets/12.jpg",
    category: "Tech",
  },
  {
    id: 3,
    title: "Material Memory",
    excerpt: "How concrete ages and why we should let it stain.",
    date: "Aug 2024",
    readTime: "4 min read",
    image: "/assets/KS1.jpg",
    category: "Materiality",
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6 md:px-20 pb-20">
      {/* Header */}
      <div className="border-b border-white/10 pb-12 mb-20">
        <h1 className="text-[12vw] leading-none font-bold uppercase tracking-tighter">
          Journal
        </h1>
        <div className="flex justify-between items-end mt-8">
          <p className="max-w-md text-gray-400">
            Thoughts on architecture, code, and the spaces in between.
          </p>
          <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-gray-600">
            Archive 2024-2025
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-20">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20 last:border-none"
          >
            {/* Meta */}
            <div className="md:col-span-2 flex flex-row md:flex-col justify-between h-full py-2">
              <span className="text-xs font-mono uppercase text-gray-500">
                {article.date}
              </span>
              <span className="text-xs font-mono uppercase text-gray-500">
                {article.category}
              </span>
            </div>

            {/* Title & Excerpt */}
            <div className="md:col-span-6 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-8 decoration-gray-500 transition-all cursor-pointer">
                {article.title}
              </h2>
              <p className="text-gray-400 text-lg max-w-lg">
                {article.excerpt}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mt-4 hover:text-gray-300"
              >
                Read Article →
              </Link>
            </div>

            {/* Image */}
            <div className="md:col-span-4 relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg bg-gray-900">
              <Image
                src={article.image}
                fill
                alt={article.title}
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
