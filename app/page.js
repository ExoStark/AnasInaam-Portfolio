'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload, FiArrowRight, FiCode, FiLayout, FiCpu } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Anas Inaam</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Full Stack Developer &amp; Computer Engineer passionate about creating 
              innovative digital experiences that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/projects"
                className="btn-primary px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 group"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 group">
                Download CV
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in creating modern, responsive web applications using 
              the latest technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCode className="w-8 h-8" />,
                title: "Frontend Development",
                description: "Creating beautiful, responsive interfaces with React, Next.js, and modern CSS"
              },
              {
                icon: <FiCpu className="w-8 h-8" />,
                title: "Backend Development",
                description: "Building robust APIs and server-side applications with Node.js and Python"
              },
              {
                icon: <FiLayout className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Designing intuitive user experiences with modern design principles"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover-lift group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
