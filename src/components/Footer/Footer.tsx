import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-sm">
                Ⓝ
              </span>
              Neges Tech Hub
            </h3>
            <p className="text-gray-400 text-sm">
              Tech, stories, and community. A hub for learning and connection.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/blog?category=TECH_HUB" className="hover:text-white transition">Tech Hub</Link></li>
              <li><Link to="/blog?category=CAMPUS_PULSE" className="hover:text-white transition">Campus Pulse</Link></li>
              <li><Link to="/blog?category=THE_JOURNAL" className="hover:text-white transition">The Journal</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-700 hover:bg-brand-primary rounded-lg transition">📘</a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-brand-primary rounded-lg transition">🐦</a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-brand-primary rounded-lg transition">📧</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Neges Tech Hub. All rights reserved. | Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}