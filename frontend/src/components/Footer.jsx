import logo from "../assets/logo8.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.326v21.348C0 23.4.597 24 1.325 24h11.483v-9.294H9.691v-3.622h3.117V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.4 24 22.674V1.326C24 .6 23.403 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kynyxsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92C2.2 15.63 2.2 15.2 2.2 12s0-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 3.81.23 1.79 2.22 1.62 5.43.01 8.71 0 9.12 0 12s.01 3.29.07 4.57c.16 3.21 2.15 5.21 5.36 5.36 1.28.06 1.69.07 4.93.07s3.65-.01 4.93-.07c3.21-.15 5.2-2.15 5.36-5.36.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.16-3.21-2.15-5.2-5.36-5.36C15.29.01 14.88 0 12 0zM12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com/kynyxsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775...z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/kynyxsolutions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328..." />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black text-white font-sans rounded-t-3xl px-6 py-12 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Kynyx Logo" className="h-10 bg-white rounded-sm" />
            </Link>
            <p className="text-gray-300 text-m leading-relaxed font-sans ">
              We build innovative digital solutions that empower businesses. Partner with us for cutting-edge technology and impactful results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-m font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-0.5">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-500 text-m font-sans transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-m font-sans mb-4">Address</h4>
            <address className="text-gray-300 not-italic  leading-relaxed font-sans text-m ">
              Kynyx Solutions LLC<br />
              8, The Green, Suite A<br />
              Dover, DE 19091 US
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-m font-sans mb-4">Stay Connected</h4>
            <p className="text-gray-300 text-m font-sans mb-3">
              Subscribe to our newsletter for updates, news, and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
       {/* Bottom Footer */}
<div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
  {/* Social Icons */}
  <div className="flex gap-5">
    <a
      href="https://www.facebook.com/kynyxsolutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-gray-400 hover:text-cyan-500 transition-transform hover:scale-110"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.098 2.795.142v3.24h-1.918c-1.505 0-1.796.716-1.796 1.763v2.31h3.59l-.467 3.626h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
    </a>

    <a
      href="https://www.instagram.com/kynyxsolutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-gray-400 hover:text-cyan-500 transition-transform hover:scale-110"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92C2.2 15.63 2.2 15.2 2.2 12s0-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 3.81.23 1.79 2.22 1.62 5.43.01 8.71 0 9.12 0 12s.01 3.29.07 4.57c.16 3.21 2.15 5.21 5.36 5.36 1.28.06 1.69.07 4.93.07s3.65-.01 4.93-.07c3.21-.15 5.2-2.15 5.36-5.36.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.16-3.21-2.15-5.2-5.36-5.36C15.29.01 14.88 0 12 0zM12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
      </svg>
    </a>

    <a
      href="https://x.com/kynyxsolutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-gray-400 hover:text-cyan-500 transition-transform hover:scale-110"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.96-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.93 2.204-4.93 4.928 0 .39.045.765.126 1.124C7.69 8.095 4.066 6.13 1.64 3.16c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.376 4.6 3.416-1.68 1.318-3.808 2.103-6.102 2.103-.397 0-.788-.023-1.174-.069 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21-.005-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/company/kynyxsolutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-cyan-500 transition-transform hover:scale-110"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.452H3.55V9h3.57v11.452zM5.33 7.433C4.19 7.433 3.27 6.506 3.27 5.368c0-1.14.92-2.066 2.06-2.066s2.06.926 2.06 2.066c0 1.138-.92 2.065-2.06 2.065zM20.45 20.452h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04s-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29z" />
      </svg>
    </a>
  </div>

  {/* Copyright */}
  <p className="text-sm text-gray-500 text-center sm:text-right">
    &copy; {new Date().getFullYear()} Kynyx Solutions LLC. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
