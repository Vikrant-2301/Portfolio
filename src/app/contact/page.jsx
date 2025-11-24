"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [focused, setFocused] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 px-6 md:px-20 flex flex-col relative overflow-hidden">
      {/* Background Grid Effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-20">
        {/* Left Content */}
        <div className="md:w-1/3 sticky top-40">
          <h1 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter mb-10">
            Let's Build <br />{" "}
            <span className="text-gray-500">The Future.</span>
          </h1>

          <div className="space-y-8 text-lg font-light text-gray-400">
            <p>
              Currently accepting new projects for 2025. Whether it's a
              residential complex or a private villa, I am ready to collaborate.
            </p>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                Direct Contact
              </p>
              <a
                href="mailto:vikrant.yadav1401@gmail.com"
                className="text-white text-xl border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                vikrant.yadav1401@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3 max-w-2xl bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12 border border-white/10 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Name Input */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === 0 || formData.name
                    ? "-top-6 text-xs text-gray-500"
                    : "top-4 text-2xl text-gray-400"
                }`}
              >
                What is your name?
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                onFocus={() => setFocused(0)}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent text-2xl py-4 border-b border-white/20 outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === 1 || formData.email
                    ? "-top-6 text-xs text-gray-500"
                    : "top-4 text-2xl text-gray-400"
                }`}
              >
                What is your email?
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                onFocus={() => setFocused(1)}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent text-2xl py-4 border-b border-white/20 outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === 2 || formData.message
                    ? "-top-6 text-xs text-gray-500"
                    : "top-4 text-2xl text-gray-400"
                }`}
              >
                Tell me about the project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                onFocus={() => setFocused(2)}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent text-2xl py-4 border-b border-white/20 outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="group relative w-full py-6 bg-white text-black rounded-lg overflow-hidden disabled:opacity-50"
            >
              <div className="relative z-10 text-xl font-bold uppercase tracking-widest group-hover:text-white transition-colors flex items-center justify-center gap-3">
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent!"
                  : "Send Proposal"}
                {status === "idle" && <span className="text-2xl">→</span>}
              </div>
              <div
                className={`absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-out ${
                  status === "loading" ? "" : "group-hover:translate-y-0"
                }`}
              />
            </button>

            {status === "error" && (
              <p className="text-red-500 text-center">
                Something went wrong. Please email me directly.
              </p>
            )}
            {status === "success" && (
              <p className="text-green-500 text-center">
                Thank you! I will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-t border-white/10 pt-10 mt-20">
        <div>
          <p className="text-xs uppercase text-gray-500 mb-2">Socials</p>
          <div className="flex gap-4 text-xl font-bold">
            <a href="#" className="hover:text-gray-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:text-center">
          <p className="text-xs uppercase text-gray-500 mb-2">Location</p>
          <p className="text-xl font-bold">India / Remote</p>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase text-gray-500 mb-2">Copyright</p>
          <p className="text-xl font-bold">© 2025</p>
        </div>
      </div>
    </div>
  );
}
