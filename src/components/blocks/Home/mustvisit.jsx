"use client";

export default function MainPageContent() {
  return (
    <main
      className="w-full bg-black text-white min-h-screen py-20"
      style={{
        background: "black",
        margin: "0 auto",
      }}
    >
      <section className="max-w-4xl mx-auto space-y-8 px-6">
        <h2 className="text-[5vw] font-light tracking-tight leading-tight">
          Welcome to my portfolio
        </h2>
        <p className="text-lg font-light leading-relaxed max-w-prose">
          This is my portfolio website. It is currently{" "}
          <span className="font-semibold">under development</span>. Thanks for
          visiting! Please check back soon for updates.
        </p>
        <p className="text-lg font-light leading-relaxed max-w-prose">
          Meanwhile, feel free to connect with me via email or social media. I’m
          excited to share my work with you shortly.
        </p>
      </section>
    </main>
  );
}
