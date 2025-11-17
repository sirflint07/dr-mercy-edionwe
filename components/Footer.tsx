'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-2xl font-bold text-[#0066CC] mb-4">
              Dr. Mercy Edionwe, MD
            </h3>
            <p className="text-gray-400 mb-4">
              Providing compassionate, comprehensive healthcare for your entire family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0066CC] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066CC] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066CC] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#0066CC] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Dr. Mercy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center space-x-2 pl-6">
                <span>Saturday: 9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex items-center space-x-2 pl-6">
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Medical Plaza, Suite 200<br />San Francisco, CA 94102</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@drmercy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Mercy Edionwe, MD. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              HIPAA Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
