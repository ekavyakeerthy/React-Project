import React from "react";

const Contact = () => {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We’d love to hear from you! Whether you have questions about our products, 
          need help with an order, or just want to share feedback — we’re here for you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          
          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 w-full rounded-lg border px-4 py-2 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 w-full rounded-lg border px-4 py-2 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-2 w-full rounded-lg border px-4 py-2 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-pink-600 text-white font-medium py-2 hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Customer Support
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Have any questions? Our team is here to help you.
              </p>
              <p className="mt-4 text-gray-900 dark:text-gray-200">
                📞 +91 98765 43210
              </p>
              <p className="text-gray-900 dark:text-gray-200">
                ✉ superprime@gmail.com
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Address
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                123 Beauty Lane,<br />
                Chennai, Tamil Nadu - 600001
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;