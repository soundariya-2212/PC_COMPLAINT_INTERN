import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 text-sm">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-400">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <NavLink to="/terms" className="hover:text-red-400 transition-colors duration-300">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-red-400 transition-colors duration-300">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/refund" className="hover:text-red-400 transition-colors duration-300">
                Refund Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="hover:text-red-400 transition-colors duration-300">
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-400">Our Services</h2>
          <ul className="space-y-1">
            <li>Device Repair</li>
            <li>Hardware Upgrades</li>
            <li>Software Installation</li>
            <li>Data Recovery</li>
            <li>Network Setup</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-400">Contact Information</h2>
          <ul className="space-y-1">
            <li>
              <span className="font-bold">Phone:</span>{' '}
              <a href="tel:+11234567890" className="hover:text-red-400">
                +1 (123) 456-7890
              </a>
            </li>
            <li>
              <span className="font-bold">Email:</span>{' '}
              <a href="mailto:support@pccomplaint.com" className="hover:text-red-400">
                support@pccomplaint.com
              </a>
            </li>
            <li>
              <span className="font-bold">Live Chat:</span> Available 24/7
            </li>
            <li>
              <span className="font-bold">Address:</span> 1234 Tech St, Suite 567, Silicon Valley, CA
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h2>
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 border-t border-gray-700 pt-3 text-center text-xs text-gray-400">
        © 2024 PC Complaint Web App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
