"use client";

import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FiHeart, FiCoffee, FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

function Footer() {
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/AnasInaam", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mohammad-anas-458454257/", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:your.email@example.com", label: "Email" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative border-t bg-gradient-to-b from-[#0d1224] to-[#0a0f1d] border-[#353951] text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated top gradient line */}
      <div className="flex justify-center -z-20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        />
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 font-playfair gradient-text">
              Anas Inaam
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Computer Engineer
            </p>
            <p className="text-sm text-gray-500">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* GitHub actions */}
          <motion.div variants={itemVariants} className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Support this Project</h4>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <motion.a
                href="https://github.com/AnasInaam/sample-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-300 group"
              >
                <IoStar className="group-hover:scale-110 transition-transform duration-300" />
                <span>Star</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  2.4k
                </span>
              </motion.a>
              <motion.a
                href="https://github.com/AnasInaam/sample-portfolio/fork"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-300 group"
              >
                <CgGitFork className="group-hover:scale-110 transition-transform duration-300" />
                <span>Fork</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  1.2k
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Main footer content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Made with
            </p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            >
              <FiHeart className="text-pink-500" />
            </motion.div>
            <p className="text-sm text-gray-400">
              by <Link 
                href="https://www.linkedin.com/in/mohammad-anas-458454257/" 
                target="_blank" 
                className="text-[#16f2b3] hover:text-[#0ecf97] transition-colors duration-300 font-medium"
              >
                Anas Inaam
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.a
              href="https://github.com/AnasInaam/sample-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: "#16f2b3" }}
              className="flex items-center gap-1 transition-colors duration-300"
            >
              <span>View Source</span>
              <FiExternalLink className="w-3 h-3" />
            </motion.a>
            <span className="text-gray-600">•</span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, color: "#16f2b3" }}
              className="transition-colors duration-300"
            >
              Privacy
            </motion.a>
            <span className="text-gray-600">•</span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, color: "#16f2b3" }}
              className="transition-colors duration-300"
            >
              Terms
            </motion.a>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-2 h-2 bg-[#16f2b3] rounded-full mb-2"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="w-1 h-1 bg-violet-500 rounded-full ml-2"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="w-1 h-1 bg-pink-500 rounded-full"
          />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
