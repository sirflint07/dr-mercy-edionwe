'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, CheckCircle, Loader2 } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  reasonForVisit: z.string().min(1, 'Please select a reason for visit'),
  isNewPatient: z.string().min(1, 'Please select an option'),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const visitReasons = [
  'General Checkup',
  'Follow-up Appointment',
  'Acute Illness',
  'Chronic Disease Management',
  'Vaccination',
  'Preventive Care',
  'Annual Physical',
  'Child Wellness Visit',
  'Other',
];

export default function AppointmentsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      preferredDate: '',
      preferredTime: '',
      reasonForVisit: '',
      isNewPatient: '',
      additionalNotes: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="bg-[#28a745] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Appointment Request Received!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for scheduling an appointment with Dr. Mitchell. Our team
              will review your request and contact you within 24 hours to confirm
              your appointment time.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">1.</span>
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">2.</span>
                  <span>Our staff will call to confirm your appointment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">3.</span>
                  <span>Arrive 15 minutes early to complete any necessary paperwork</span>
                </li>
              </ul>
            </div>

            <Button
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
              className="bg-[#0066CC] hover:bg-[#0052A3]"
            >
              Schedule Another Appointment
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              Schedule an Appointment
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Take the first step toward better health. Book your appointment today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-md sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Office Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-[#0066CC]" />
                      Office Hours
                    </h3>
                    <ul className="text-gray-600 space-y-1 pl-7">
                      <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                      <li>Saturday: 9:00 AM - 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-[#0066CC]" />
                      Same-Day Appointments
                    </h3>
                    <p className="text-gray-600 pl-7">
                      We offer same-day appointments for urgent medical needs. Call us
                      at (555) 123-4567 for availability.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Insurance Accepted
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We accept most major insurance plans including:
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Blue Cross Blue Shield</li>
                      <li>• Aetna</li>
                      <li>• UnitedHealthcare</li>
                      <li>• Cigna</li>
                      <li>• Medicare</li>
                      <li>• And many more</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request an Appointment
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Email *</FormLabel>
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isNewPatient"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you a new patient? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">Yes, I'm a new patient</SelectItem>
                              <SelectItem value="no">No, I'm an existing patient</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Preferred Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Preferred Time *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                                <SelectItem value="evening">Evening (4:00 PM - 6:00 PM)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="reasonForVisit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Visit *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a reason" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {visitReasons.map((reason) => (
                                <SelectItem key={reason} value={reason}>
                                  {reason}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please share any additional information that might be helpful..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#28a745] hover:bg-[#218838] text-white"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Request Appointment'
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * Required fields. You'll receive a confirmation call within 24 hours.
                    </p>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
