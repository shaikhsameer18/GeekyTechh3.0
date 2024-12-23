'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Add state management for the subscription message
import { useTheme } from 'next-themes';
import { Github, Linkedin, Instagram } from 'lucide-react';
import blackLogo from '@/app/assets/blacklogo.png'; // Import the black logo
import whiteLogo from '@/app/assets/whitelogo.png'; // Import the white logo

export default function Footer() {
  const { theme } = useTheme(); // Access the current theme
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState<string>(''); // State for email input
  const [status, setStatus] = useState<string>(''); // State for subscription status message
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // State to track submission progress

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form default redirect behavior
    setIsSubmitting(true); // Set submitting to true, so we disable the button and show feedback
    setStatus('Submitting...'); // Display submitting status

    try {
      const response = await fetch('https://formspree.io/f/xdkkobwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        setStatus('Subscription successful!'); // Success message
        setEmail(''); // Clear the email field
      } else {
        setStatus('Something went wrong. Please try again.'); // Error message
      }
    } catch {
      setStatus('Something went wrong. Please try again.'); // Error message in case of network failure
    } finally {
      setIsSubmitting(false); // Reset submitting state, so the button can be re-enabled
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="md:col-span-2 ml-8">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={theme === 'dark' ? whiteLogo : blackLogo}
                alt="Geekytechh Logo"
                className="h-24 w-auto object-contain"
                priority
              />

              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 font-poppins">
                Geeky Techh
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Bringing your digital ideas to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/geekytechh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/geeky.techh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 font-poppins">Quick Links</h4>
            <nav className="flex flex-col space-y-1 text-sm">
              {['Home', 'Services', 'Skills', 'Projects', 'Team', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="mr-8">
            <h4 className="text-lg font-semibold mb-2 font-poppins">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
              Stay updated with our latest news and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email"
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting} // Disable the button while submitting
                className={`bg-primary-600 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'} {/* Show dynamic button text */}
              </button>
              {/* Status message */}
              {status && <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">{status}</p>}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} GeekyTechh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
