'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import {
  Clock,
  Award,
  Heart,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Board Certified',
    description: 'Dr. Mercy Edionwe is board certified in Family Medicine with ongoing continuing education.',
  },
  {
    icon: Clock,
    title: 'Same-Day Appointments',
    description: 'We understand urgent care needs and offer same-day appointments whenever possible.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'We take time to understand your unique health needs and create tailored treatment plans.',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Care',
    description: 'From preventive care to chronic disease management, we handle all your health needs.',
  },
  {
    icon: Sparkles,
    title: 'Modern Facilities',
    description: 'State-of-the-art medical equipment and comfortable, welcoming office environment.',
  },
  {
    icon: Users,
    title: 'Family-Focused',
    description: 'We care for patients of all ages, making us your one-stop healthcare solution.',
  },
];

export function WhyChooseUs() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Dr. Mercy Edionwe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of truly patient-centered healthcare
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-8 justify-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="flex-1 min-w-[300px] max-w-[380px]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-[#28a745]/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
