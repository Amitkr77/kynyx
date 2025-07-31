import logo from "../assets/logo8.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "#contact" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Return Refund Policy", href: "/return-refund-policy" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/kynyxsolutions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.893h-2.33v6.988C18.343 21.129 22 16.992 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kynyxsolutions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.81.227 1.792 2.222 1.622 5.432.014 8.712 0 9.115 0 12s.014 3.288.072 4.568c.155 3.21 2.15 5.205 5.36 5.36 1.28.058 1.689.072 4.932.072s3.652-.014 4.932-.072c3.21-.155 5.205-2.15 5.36-5.36.058-1.28.072-1.689.072-4.932s-.014-3.652-.072-4.932c-.155-3.21-2.15-5.205-5.36-5.36C15.288.014 14.879 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/kynyxsolutions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/kynyxsolutions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6 md:px-12 rounded-t-3xl font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Kynyx Logo" className="h-10 bg-white rounded-sm" />
            </Link>
            <p className="text-gray-300 text-base leading-relaxed">
              We build innovative digital solutions that empower businesses. Partner with us for cutting-edge technology and impactful results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-500 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Address</h4>
            <address className="text-gray-300 not-italic leading-relaxed">
              Kynyx Solutions LLC<br />
              8, The Green, Suite A<br />
              Dover - 19091 (Delaware) US
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates, news, and insights.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-r-md hover:bg-cyan-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-cyan-500 transition transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Kynyx Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
