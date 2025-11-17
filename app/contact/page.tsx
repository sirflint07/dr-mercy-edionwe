'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
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
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to answer your questions and provide the care you need
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 mb-12">
            <motion.div
              className="flex-1 min-w-[280px] bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#0066CC]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Office Location
              </h3>
              <p className="text-gray-600 leading-relaxed">
                123 Medical Plaza, Suite 200<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[280px] bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#0066CC]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Phone Numbers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Office: (555) 123-4567<br />
                Emergency: (555) 123-4568<br />
                Fax: (555) 123-4569
              </p>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[280px] bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#0066CC]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600 leading-relaxed">
                General: info@drmitchell.com<br />
                Appointments: appointments@drmitchell.com<br />
                Billing: billing@drmitchell.com
              </p>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[280px] bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#0066CC]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Have a question or need assistance? Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">
                      Thank you for your message! We'll respond within 24 hours.
                    </p>
                  </motion.div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#0066CC] hover:bg-[#0052A3]"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for health tips, office updates, and more.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#0066CC]/10 p-3 rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors text-[#0066CC]"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#0066CC]/10 p-3 rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors text-[#0066CC]"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#0066CC]/10 p-3 rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors text-[#0066CC]"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#0066CC]/10 p-3 rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors text-[#0066CC]"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Information
                </h3>
                <p className="text-gray-600 mb-4">
                  For medical emergencies, please call 911 or go to your nearest
                  emergency room immediately.
                </p>
                <p className="text-gray-600">
                  For urgent but non-emergency issues outside of office hours,
                  please call our emergency line at <strong>(555) 123-4568</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <p className="text-gray-600">
              Conveniently located in the heart of San Francisco
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977824341!2d-122.41941548468194!3d37.78825797975771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUnion%20Square%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <h3 className="font-semibold text-gray-900 mb-2">
              Parking & Accessibility
            </h3>
            <p className="text-gray-700">
              Free parking is available in the building garage with validation.
              Our office is fully wheelchair accessible with elevator access to all floors.
              Public transportation options include bus lines 12, 34, and 56, with stops
              within two blocks of our office.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
