"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw, FiHome, FiAlertTriangle } from 'react-icons/fi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#0d1224] to-purple-900 p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-md mx-auto text-center glass p-8 rounded-2xl backdrop-blur-xl border border-white/10"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              className="mb-6"
            >
              <FiAlertTriangle className="w-16 h-16 text-yellow-400 mx-auto" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-4 font-playfair gradient-text"
            >
              Oops! Something went wrong
            </motion.h1>
            
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 mb-8 leading-relaxed"
            >
              We&apos;re sorry, but something unexpected happened. 
              Please try refreshing the page or return to the homepage.
            </motion.p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRefresh}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-200"
              >
                <FiRefreshCw className="w-4 h-4" />
                Refresh Page
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-200"
              >
                <FiHome className="w-4 h-4" />
                Go Home
              </motion.button>
            </motion.div>

            {process.env.NODE_ENV === 'development' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 text-left"
              >
                <details className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <summary className="cursor-pointer text-gray-300 font-medium flex items-center gap-2">
                    <FiAlertTriangle className="w-4 h-4" />
                    Error Details (Development)
                  </summary>
                  <div className="mt-3 p-3 bg-black/30 rounded">
                    <pre className="text-red-400 text-xs whitespace-pre-wrap overflow-auto max-h-40">
                      {this.state.error && this.state.error.toString()}
                      <br />
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 pt-6 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-sm">
                If the problem persists, please contact support
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
