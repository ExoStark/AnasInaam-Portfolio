'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiTwitter, 
  FiHeart,
  FiArrowUp
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/AnasInaam", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/mohammad-anas-458454257/", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail />, href: "mailto:your.email@example.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold font-playfair gradient-text mb-4">
                Anas Inaam
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & Computer Engineer passionate about creating 
                innovative digital experiences that make a difference.
              </p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social links */}
          <div className="text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
              >
                <FiHeart className="text-pink-500" />
              </motion.span>
              <span>by <Link href="https://linkedin.com/in/mohammad-anas-458454257/" className="text-indigo-400 hover:text-indigo-300">Anas Inaam</Link></span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
