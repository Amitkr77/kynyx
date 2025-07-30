import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-[#0f0f1a] text-gray-200 min-h-screen px-6 md:px-20 py-12 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Terms of Service
        </h1>
        <p className="text-lg mb-8 text-gray-400">
          Last updated: July 30, 2025
        </p>

        <div className="space-y-8 text-base leading-relaxed text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website and using our services, you agree to be
              bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these terms. Misuse of our platform is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and logos are owned by or licensed to our
              company. Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              4. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our
              services at any time, without notice, for conduct that violates
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of your local jurisdiction.
              Any disputes shall be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">
              7. Contact Us
            </h2>
            <p>
              For any questions about these Terms, contact us at:
            </p>
            <p className="mt-2 text-cyan-400">legal@yourdomain.com</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
