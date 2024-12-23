"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

const InteractiveFooter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000); // Reset after showing success message
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-6">
            We are a creative production company dedicated to bringing your
            stories to life with professionalism and creativity. Let’s create
            something amazing together.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Home",
              "Services",
              "Portfolio",
              "Team",
              "Testimonials",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>1234 Creative Lane, Hollywood, CA</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@productioncompany.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form onSubmit={handleSubscription}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Subscribe
            </button>
            {submitted && (
              <p className="text-green-400 mt-2">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex space-x-4"
        >
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © Production Company, {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InteractiveFooter;
