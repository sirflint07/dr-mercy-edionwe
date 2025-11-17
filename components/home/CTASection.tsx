'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Clock } from 'lucide-react';

export function CTASection() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step toward optimal health
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/appointments">
              <Button size="lg" className="bg-[#28a745] hover:bg-[#218838] text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </Button>
            </Link>
            <a href="tel:5551234567">
              <Button size="lg" variant="outline" className="bg-white text-[#0066CC] hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Same-Day Appointments Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Accepting New Patients</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Most Insurance Accepted</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
