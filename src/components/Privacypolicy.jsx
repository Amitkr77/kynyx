import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0f0f1a] text-gray-200 min-h-screen px-6 md:px-20 py-12 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Privacy Policy
        </h1>
        <p className="text-lg mb-8 text-gray-400">
          Last updated: July 30, 2025
        </p>

        <div className="space-y-8 text-base leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to our website. This privacy policy outlines how we
              collect, use, disclose, and safeguard your information when you
              visit our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Personal Data (e.g., name, email address)</li>
              <li>Usage Data (e.g., browser type, pages visited)</li>
              <li>Cookies and Tracking Technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use your data to provide and improve our services, communicate
              with you, and analyze website traffic and performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Sharing Your Data
            </h2>
            <p>
              We do not share your personal data with third parties except where
              necessary to provide our services or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Your Privacy Rights
            </h2>
            <p>
              You have the right to access, update, or delete your data. To
              exercise your rights, please contact us using the information
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2 text-cyan-400">privacy@yourdomain.com</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
