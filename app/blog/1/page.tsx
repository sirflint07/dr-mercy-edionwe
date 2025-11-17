'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPost = {
  title: '10 Tips for Managing Seasonal Allergies',
  category: 'Allergies',
  author: 'Dr. Sarah Mitchell',
  date: '2024-03-15',
  readTime: '5 min read',
  image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1200',
  content: `
    <p>Seasonal allergies affect millions of people every year, causing symptoms like sneezing, congestion, and itchy eyes. While you can't control the pollen count, you can take steps to minimize your exposure and manage your symptoms effectively.</p>

    <h2>Understanding Seasonal Allergies</h2>
    <p>Seasonal allergies, also known as hay fever or allergic rhinitis, occur when your immune system overreacts to outdoor allergens such as pollen from trees, grasses, and weeds. These allergic reactions are most common during spring, summer, and early fall.</p>

    <h2>10 Practical Tips for Relief</h2>

    <h3>1. Monitor Pollen Counts</h3>
    <p>Check daily pollen forecasts and plan outdoor activities when pollen counts are lower, typically in the early morning or after rain.</p>

    <h3>2. Keep Windows Closed</h3>
    <p>During high pollen seasons, keep your windows closed at home and in your car to prevent allergens from entering. Use air conditioning with a clean filter instead.</p>

    <h3>3. Shower After Being Outdoors</h3>
    <p>Pollen can stick to your hair, skin, and clothing. Shower and change clothes after spending time outside to remove allergens.</p>

    <h3>4. Use HEPA Filters</h3>
    <p>Install high-efficiency particulate air (HEPA) filters in your home's heating and cooling systems to trap allergens and improve indoor air quality.</p>

    <h3>5. Wash Bedding Regularly</h3>
    <p>Wash sheets, pillowcases, and blankets in hot water weekly to remove allergens that accumulate during sleep.</p>

    <h3>6. Start Medications Early</h3>
    <p>If you know you're sensitive to specific seasonal allergens, start taking antihistamines or other allergy medications before symptoms begin.</p>

    <h3>7. Wear Sunglasses Outdoors</h3>
    <p>Protect your eyes from pollen by wearing wraparound sunglasses when you're outside, especially on windy days.</p>

    <h3>8. Use Saline Nasal Rinses</h3>
    <p>Regular nasal irrigation with saline solution can help flush out allergens and reduce nasal congestion and irritation.</p>

    <h3>9. Maintain Indoor Humidity</h3>
    <p>Keep indoor humidity levels between 30-50% to prevent mold growth and reduce dust mites, which can worsen allergy symptoms.</p>

    <h3>10. Consult with Your Doctor</h3>
    <p>If over-the-counter medications aren't providing relief, schedule an appointment to discuss prescription options or allergy testing.</p>

    <h2>When to Seek Medical Help</h2>
    <p>While most seasonal allergies can be managed with lifestyle changes and over-the-counter medications, you should consult a healthcare provider if:</p>
    <ul>
      <li>Your symptoms significantly impact your quality of life</li>
      <li>Over-the-counter medications aren't providing adequate relief</li>
      <li>You experience symptoms year-round</li>
      <li>You have asthma that's triggered by allergies</li>
      <li>You want to explore immunotherapy (allergy shots)</li>
    </ul>

    <h2>The Bottom Line</h2>
    <p>Managing seasonal allergies requires a combination of avoidance strategies, medications, and lifestyle modifications. By implementing these tips and working with your healthcare provider, you can minimize symptoms and enjoy outdoor activities even during peak allergy season.</p>

    <p>Remember, everyone's allergies are different, so what works for one person may not work for another. Don't hesitate to reach out to our office if you need personalized advice or treatment for your seasonal allergies.</p>
  `,
};

export default function BlogPostPage() {
  return (
    <div className="pt-20">
      <article>
        <section className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  <span>{blogPost.category}</span>
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {blogPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(blogPost.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                  color: '#374151',
                }}
              />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="Dr. Sarah Mitchell"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Dr. Sarah Mitchell, MD
                      </div>
                      <div className="text-gray-600">Board Certified Family Physician</div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Have Questions About Your Health?
                </h3>
                <p className="text-blue-100 mb-6">
                  Schedule an appointment with Dr. Mitchell to discuss your concerns
                </p>
                <Link href="/appointments">
                  <Button size="lg" className="bg-[#28a745] hover:bg-[#218838]">
                    Book an Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </article>

      <style jsx global>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 2rem;
          margin-bottom: 1.25rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
}
