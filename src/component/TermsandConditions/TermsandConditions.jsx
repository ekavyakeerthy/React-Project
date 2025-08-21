import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-50/60 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our
            website or services. By accessing or using our site, you agree to be
            bound by these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By using this website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
              If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. Use of Website
            </h2>
            <p className="mt-2">
              You agree to use this website only for lawful purposes and in a
              way that does not infringe on the rights of, restrict, or inhibit
              anyone else’s use and enjoyment of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Product Information
            </h2>
            <p className="mt-2">
              We strive to ensure that all product descriptions, pricing, and
              availability displayed on our website are accurate. However, we
              reserve the right to correct any errors, inaccuracies, or
              omissions at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Orders & Payments
            </h2>
            <p className="mt-2">
              By placing an order, you agree to provide current, complete, and
              accurate purchase information. We reserve the right to refuse any
              order placed with us at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              All content on this website, including text, images, logos, and
              designs, are the property of our company and are protected by
              copyright laws. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              We are not liable for any damages resulting from the use or
              inability to use our website or products. Your use of the website
              is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              7. Changes to Terms
            </h2>
            <p className="mt-2">
              We reserve the right to update or modify these Terms and
              Conditions at any time. It is your responsibility to check this
              page periodically for changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              8. Contact Us
            </h2>
            <p className="mt-2">
              For questions about these Terms & Conditions, please{" "}
              <Link to="/contact" className="text-blue-600 hover:underline">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            These Terms & Conditions were last updated on{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              August 20, 2025
            </span>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;