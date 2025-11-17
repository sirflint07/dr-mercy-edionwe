'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Syringe,
  Pill,
  Baby,
  Users,
  ClipboardList,
  Heart,
  Microscope,
  Thermometer,
  Ambulance,
  Plus,
  Minus
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkups',
    description: 'Comprehensive health examinations to monitor and maintain your overall wellness.',
    details: [
      'Complete physical examination',
      'Vital signs monitoring',
      'Health risk assessment',
      'Personalized wellness plan',
      'Referrals when needed',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, hypertension, heart disease, and other chronic conditions.',
    details: [
      'Blood pressure monitoring',
      'Diabetes management and education',
      'Cholesterol management',
      'Heart disease prevention',
      'Regular follow-up care',
    ],
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Full range of immunizations for children and adults, including flu shots and travel vaccines.',
    details: [
      'Childhood immunization schedule',
      'Adult vaccinations',
      'Flu shots',
      'Travel vaccines',
      'Vaccination records management',
    ],
  },
  {
    icon: Activity,
    title: 'Preventive Care',
    description: 'Screenings, health risk assessments, and lifestyle counseling to prevent future health issues.',
    details: [
      'Cancer screenings',
      'Health risk assessments',
      'Nutrition counseling',
      'Exercise guidance',
      'Stress management',
    ],
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Careful monitoring and adjustment of medications to ensure optimal treatment outcomes.',
    details: [
      'Prescription management',
      'Medication reviews',
      'Drug interaction screening',
      'Side effect monitoring',
      'Refill coordination',
    ],
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents from birth through age 18.',
    details: [
      'Well-child visits',
      'Growth and development monitoring',
      'Childhood illness treatment',
      'Sports physicals',
      'Behavioral health support',
    ],
  },
  {
    icon: Users,
    title: 'Geriatric Care',
    description: 'Comprehensive healthcare tailored to the unique needs of older adults.',
    details: [
      'Age-related health management',
      'Falls prevention',
      'Memory screening',
      'Medication optimization',
      'Care coordination',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Annual Physicals',
    description: 'Complete health evaluations including lab work, vital signs, and wellness counseling.',
    details: [
      'Comprehensive physical exam',
      'Laboratory testing',
      'Vision and hearing screening',
      'Health history review',
      'Wellness planning',
    ],
  },
  {
    icon: Heart,
    title: 'Women\'s Health',
    description: 'Specialized care for women including preventive screenings and reproductive health.',
    details: [
      'Annual gynecological exams',
      'Breast cancer screening',
      'Prenatal care',
      'Menopause management',
      'Family planning counseling',
    ],
  },
  {
    icon: Microscope,
    title: 'Laboratory Services',
    description: 'On-site lab testing for quick, accurate diagnostic results.',
    details: [
      'Blood work',
      'Urinalysis',
      'Rapid strep tests',
      'Glucose monitoring',
      'Cholesterol screening',
    ],
  },
  {
    icon: Thermometer,
    title: 'Acute Illness Care',
    description: 'Prompt treatment for sudden illnesses and minor injuries.',
    details: [
      'Cold and flu treatment',
      'Infections treatment',
      'Minor injury care',
      'Allergic reactions',
      'Respiratory issues',
    ],
  },
  {
    icon: Ambulance,
    title: 'Urgent Care',
    description: 'Same-day appointments for non-life-threatening urgent medical needs.',
    details: [
      'Same-day sick visits',
      'Minor wound care',
      'Sprains and strains',
      'Urgent medication needs',
      'Follow-up care',
    ],
  },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare services for your entire family, all under one roof
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  className="flex-1 min-w-[320px] max-w-[500px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow h-full">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-[#0066CC]/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-[#0066CC]" />
                        </div>
                        <button
                          onClick={() => toggleExpand(index)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          {isExpanded ? (
                            <Minus className="w-5 h-5 text-[#0066CC]" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#0066CC]" />
                          )}
                        </button>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-3">
                                What's Included:
                              </h4>
                              <ul className="space-y-2">
                                {service.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <div className="bg-[#28a745] rounded-full p-1 mt-0.5 flex-shrink-0">
                                      <svg
                                        className="w-2.5 h-2.5 text-white"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path d="M5 13l4 4L19 7"></path>
                                      </svg>
                                    </div>
                                    <span className="text-gray-700 text-sm">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-16 bg-white rounded-2xl p-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule an appointment today and experience comprehensive, compassionate care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments">
                <Button size="lg" className="bg-[#28a745] hover:bg-[#218838]">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
