'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './theme-provider';
import { FiSun, FiMoon, FiMenu, FiX, FiCode, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: <FiUser /> },
    { href: '/about', label: 'About', icon: <FiUser /> },
    { href: '/projects', label: 'Projects', icon: <FiBriefcase /> },
    { href: '/contact', label: 'Contact', icon: <FiMail /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <FiCode className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-playfair gradient-text">
              Anas Inaam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 relative transition-colors"
              aria-label="Toggle theme"
            >
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-indigo-500 transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                {theme === 'dark' ? (
                  <FiMoon className="w-3 h-3 mx-auto text-indigo-900" />
                ) : (
                  <FiSun className="w-3 h-3 mx-auto text-yellow-500" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5"
              >
                {theme === 'dark' ? (
                  <>
                    <FiSun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
