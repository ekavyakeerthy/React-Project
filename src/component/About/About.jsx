import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              About <span className="text-pink-600">Super Prime</span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              At <strong>[Your Brand Name]</strong>, we believe beauty is about
              confidence, care, and self-love. We craft premium, skin-friendly
              cosmetics that enhance your natural glow—without compromising on
              safety or ethics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Cruelty-Free
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Dermatologist Tested
              </span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 dark:text-gray-200">
                Clean Ingredients
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full rounded-2xl shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1512207846876-bb54ef5056e8?q=80&w=1600&auto=format&fit=crop"
              alt="Cosmetics flatlay"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Promise / Features */}
      <section className="bg-pink-50/60 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our Promise
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Affordable luxury, high performance formulas, and transparent
            standards.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Skin-Friendly",
                desc: "Gentle, non-irritating formulas suitable for daily wear.",
              },
              {
                title: "Cruelty-Free",
                desc: "No animal testing—ever. Ethically sourced ingredients.",
              },
              {
                title: "Long-Lasting",
                desc: "High-performance shades that stay true all day.",
              },
              {
                title: "100% Authentic",
                desc: "Quality-checked and safety-compliant products.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white/70 dark:bg-gray-900 border dark:border-gray-700 p-5 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
          <li className="rounded-xl border dark:border-gray-700 p-4">
            • Trend-driven collections + timeless essentials
          </li>
          <li className="rounded-xl border dark:border-gray-700 p-4">
            • Secure checkout & fast doorstep delivery
          </li>
          <li className="rounded-xl border dark:border-gray-700 p-4">
            • Hassle-free returns and responsive support
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-pink-600 px-5 py-3 font-medium text-white  hover:bg-pink-700"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission Footer */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-10 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to empower every individual to feel confident in
            their own skin with safe, innovative, and beautiful cosmetics.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;