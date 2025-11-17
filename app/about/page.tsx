'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import {
  Award,
  GraduationCap,
  Users,
  Heart,
  Star,
  BookOpen
} from 'lucide-react';

const education = [
  {
    degree: 'Doctor of Medicine (MD)',
    institution: 'Stanford University School of Medicine',
    year: '2005',
  },
  {
    degree: 'Bachelor of Science in Biology',
    institution: 'University of California, Berkeley',
    year: '2001',
  },
  {
    degree: 'Family Medicine Residency',
    institution: 'UCSF Medical Center',
    year: '2005-2008',
  },
];

const certifications = [
  'Board Certified - American Board of Family Medicine',
  'Advanced Cardiac Life Support (ACLS)',
  'Pediatric Advanced Life Support (PALS)',
  'Certificate in Geriatric Medicine',
  'Certified in Chronic Care Management',
  'Member - American Academy of Family Physicians',
  'Member - California Medical Association',
];

const achievements = [
  {
    icon: Users,
    stat: '5,000+',
    label: 'Patients Treated',
  },
  {
    icon: Star,
    stat: '15+',
    label: 'Years Experience',
  },
  {
    icon: Heart,
    stat: '98%',
    label: 'Patient Satisfaction',
  },
  {
    icon: Award,
    stat: '20+',
    label: 'Awards & Honors',
  },
];

export default function AboutPage() {
  const [ref, isInView] = useInView();

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
              Meet Dr. Sarah Mitchell
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A dedicated family physician committed to providing compassionate,
              personalized healthcare for patients of all ages
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#0066CC] rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dr. Sarah Mitchell"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Dr. Mitchell
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Sarah Mitchell is a board-certified family physician with over 15 years
                  of experience providing comprehensive healthcare to patients of all ages.
                  Her practice philosophy centers on building lasting relationships with
                  patients and their families, emphasizing preventive care and holistic wellness.
                </p>
                <p>
                  After earning her medical degree from Stanford University School of Medicine,
                  Dr. Mitchell completed her residency in Family Medicine at UCSF Medical Center,
                  where she received the Outstanding Resident Award for clinical excellence.
                </p>
                <p>
                  Dr. Mitchell has a special interest in chronic disease management, preventive
                  medicine, and pediatric care. She believes in treating the whole person, not
                  just symptoms, and takes the time to understand each patient's unique needs
                  and circumstances.
                </p>
                <p>
                  When she's not caring for patients, Dr. Mitchell enjoys hiking with her family,
                  volunteering at local health clinics, and staying current with the latest
                  medical research and treatment protocols.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-gray-600">
              A track record of excellence in patient care
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex-1 min-w-[250px] max-w-[300px] bg-white p-8 rounded-xl shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-[#0066CC]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0066CC]" />
                  </div>
                  <div className="text-4xl font-bold text-[#0066CC] mb-2">
                    {item.stat}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-8 h-8 text-[#0066CC]" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Education & Training
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-[#0066CC] pl-6 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-sm text-[#0066CC] font-semibold mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-gray-600">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-[#0066CC]" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Certifications & Memberships
                </h2>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="bg-[#28a745] rounded-full p-1 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
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
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Philosophy of Care
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              "I believe that the foundation of excellent healthcare is a strong doctor-patient
              relationship built on trust, communication, and mutual respect. Every patient
              deserves to be heard, understood, and treated with compassion. My goal is not
              just to treat illness, but to promote lifelong health and wellness for every
              patient I serve."
            </p>
            <p className="mt-4 text-lg text-blue-200">
              - Dr. Sarah Mitchell, MD
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
