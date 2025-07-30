import React from 'react';

const Footer = () => {
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/kynyxsolutions',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.893h-2.33v6.988C18.343 21.129 22 16.992 22 12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kynyxsolutions',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.81.227 1.792 2.222 1.622 5.432.014 8.712 0 9.115 0 12s.014 3.288.072 4.568c.155 3.21 2.15 5.205 5.36 5.36 1.28.058 1.689.072 4.932.072s3.652-.014 4.932-.072c3.21-.155 5.205-2.15 5.36-5.36.058-1.28.072-1.689.072-4.932s-.014-3.652-.072-4.932c-.155-3.21-2.15-5.205-5.36-5.36C15.288.014 14.879 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://x.com/kynyxsolutions',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kynyxsolutions',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16 md:py-20 rounded-t-3xl">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-serif text-4xl text-white font-semibold tracking-wider">Kynyx Solutions</h3>
            <p className="font-sans text-gray-300 text-lg leading-relaxed text-center md:text-left max-w-xs">
              We build innovative digital solutions that empower businesses. Partner with us for cutting-edge technology and impactful results.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-sans text-2xl text-white font-semibold">Quick Links</h4>
            <div className="flex flex-col items-center gap-3 md:items-start">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-500 transition-colors duration-300 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <h4 className="font-sans text-2xl text-white font-semibold">Stay Connected</h4>
            <p className="font-sans text-gray-300 text-lg text-center md:text-right">
              Subscribe to our newsletter for updates, news, and insights.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8 md:mt-12">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-300 hover:text-cyan-500 transform hover:scale-110 transition-all duration-300" aria-label={link.name}>
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kynyx Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
