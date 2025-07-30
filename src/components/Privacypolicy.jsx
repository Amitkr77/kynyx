import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0f0f1a] text-gray-200 min-h-screen px-6 py-12 md:px-20 font-sans">
      <div className="max-w-5xl mx-auto animate-fadeIn space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400">Last updated: July 30, 2025</p>
        </header>

        {/* Content */}
        <section className="space-y-12 text-base md:text-lg leading-relaxed text-gray-300">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Introduction
            </h2>
            <p>
              Welcome to Kynyx Solutions LLC ("Kynyx," "we," "us," or "our").
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website kynyx.com
              (the "Site"). Please read this policy carefully. If you disagree,
              please do not access the site.
            </p>
          </div>

          {/* Info We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email, phone number,
                messages, etc.
              </li>
              <li>
                <strong>Automatic Data:</strong> IP, browser, system, access
                times, and page views.
              </li>
              <li>
                <strong>Cookies:</strong> Used to improve functionality and
                customize your experience.
              </li>
            </ul>
          </div>

          {/* Use of Data */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Respond to inquiries and provide services</li>
              <li>Send promotions, newsletters, or updates</li>
              <li>Improve the Site's performance and security</li>
              <li>Detect and prevent fraud or misuse</li>
            </ul>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Disclosure of Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Legal obligations:</strong> We may disclose if required
                by law.
              </li>
              <li>
                <strong>Service providers:</strong> Hosting, analytics, or
                support teams may access limited data.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Data Security
            </h2>
            <p>
              We use administrative, technical, and physical safeguards to
              protect your data. However, no method of transmission is 100%
              secure.
            </p>
          </div>

          {/* State Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Your State Privacy Rights
            </h2>
            <p>
              Residents of states like California (under CCPA) can request,
              delete, or opt-out of data collection. We do not sell your
              personal information.
            </p>
          </div>

          {/* Do-Not-Track */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Do-Not-Track Signals
            </h2>
            <p>
              We currently do not respond to Do-Not-Track (DNT) signals from
              browsers.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Children's Privacy
            </h2>
            <p>
              We do not knowingly collect personal data from children under 13.
              If you believe we have, contact us and we’ll delete it.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy at any time. Updates will be posted on
              this page. Please review regularly.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#141625] p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>If you have questions, reach out to us:</p>
            <div className="mt-3 text-cyan-400">
              <p>Kynyx Solutions LLC</p>
              <p>8, The Green, Suite A</p>
              <p>Dover - 19091 (Delaware) US</p>
              <p>Email: info@kynyx.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
