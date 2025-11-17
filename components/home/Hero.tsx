'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Award className="w-5 h-5" />
              <span className="text-xs md:text-sm font-medium">Board Certified Internal Medicine Physician</span>
            </motion.div>

            <h1 className="text-2xl md:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Compassionate Care for Your Whole Family
            </h1>
            <p className="text-base lg:text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl lg:text-justify text-start">
              {`Dr. Mercy Edionwe, MD is a practicing internal medicine hospital physician. She has done numerous radio talks and podcasts dealing with living a healthy lifestyle and speaking publicly about common diseases and medical conditions. If she is not on the "air" talking to people about health, you can see her writing about healthy lifestyle choices and disease prevention in the numerous articles as featured in blog sites and even on the ABC News website. If she is not writing about preventative health, you can find her helping in getting others to succeed in their medical career endeavors. From writing questions at a board review company to having personal interactions with aspiring medical students, Dr. Edionwe believes in the principle of “giving forward” once you too have received.`}
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/appointments">
                <Button size="lg" className="bg-[#28a745] hover:bg-[#218838] text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-[#0066CC] hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-3xl font-bold">15+</div>
                <div className="text-blue-200 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-3xl font-bold">5000+</div>
                <div className="text-blue-200 text-xs md:text-sm">Happy Patients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-3xl font-bold">98%</div>
                <div className="text-blue-200 text-xs md:text-sm">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dr. Mercy Edionwe"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
