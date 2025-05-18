"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Clear messages after 3 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if email ends with '@gmail.com'
    if (email.endsWith('@gmail.com')) {
      setSuccess(true);
      setTimeout(() => router.push('/dashboard'), 1000);
    } else {
      throw new Error('Only Gmail addresses are allowed');
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Login failed');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="text-indigo-600 text-3xl"
                >
                  🎓
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Welcome Back!
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Sign in to your classroom dashboard
            </p>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
                >
                  <FiAlertCircle className="mr-2" />
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
                >
                  <FiCheckCircle className="mr-2" />
                  Login successful! Redirecting...
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="space-y-1"
              >
                <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-blue-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-blue-600"
                  />
                </div>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="space-y-1"
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-blue-600"
                  />
                </div>
              </motion.div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <Link href="/forgot" className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="block h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Sign In'
                )}
              </motion.button>
            </form>
          </div>

          <motion.div 
            whileHover={{ backgroundColor: '#f5f5f5' }}
            className="px-8 py-4 bg-gray-50 text-center"
          >
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                Sign up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}