'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { NewsletterSignup } from '@/components/NewsletterSignup';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <NewsletterSignup />
    </motion.div>
  );
}
