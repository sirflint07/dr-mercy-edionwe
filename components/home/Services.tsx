'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Syringe,
  Pill,
  Baby,
  Users,
  ClipboardList
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkups',
    description: 'Comprehensive health examinations to monitor and maintain your overall wellness.',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, hypertension, heart disease, and other chronic conditions.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Full range of immunizations for children and adults, including flu shots and travel vaccines.',
  },
  {
    icon: Activity,
    title: 'Preventive Care',
    description: 'Screenings, health risk assessments, and lifestyle counseling to prevent future health issues.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Careful monitoring and adjustment of medications to ensure optimal treatment outcomes.',
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents from birth through age 18.',
  },
  {
    icon: Users,
    title: 'Geriatric Care',
    description: 'Comprehensive healthcare tailored to the unique needs of older adults.',
  },
  {
    icon: ClipboardList,
    title: 'Annual Physicals',
    description: 'Complete health evaluations including lab work, vital signs, and wellness counseling.',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your family's medical needs
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-1 min-w-[280px] max-w-[350px]"
              >
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="bg-[#0066CC]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#0066CC]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link href="/services">
            <Button size="lg" className="bg-[#0066CC] hover:bg-[#0052A3]">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
