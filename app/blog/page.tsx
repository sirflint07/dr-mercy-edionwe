'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Managing Seasonal Allergies',
    excerpt: 'Learn practical strategies to minimize allergy symptoms and enjoy the outdoors this spring.',
    category: 'Allergies',
    author: 'Dr. Sarah Mitchell',
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Importance of Annual Health Screenings',
    excerpt: 'Discover why preventive care and regular checkups are crucial for long-term health.',
    category: 'Preventive Care',
    author: 'Dr. Sarah Mitchell',
    date: '2024-03-10',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Understanding Diabetes: Prevention and Management',
    excerpt: 'A comprehensive guide to understanding diabetes, risk factors, and effective management strategies.',
    category: 'Chronic Disease',
    author: 'Dr. Sarah Mitchell',
    date: '2024-03-05',
    image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Healthy Eating Habits for Busy Families',
    excerpt: 'Simple nutrition tips and meal planning strategies for families on the go.',
    category: 'Nutrition',
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-28',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Mental Health Matters: Recognizing and Addressing Stress',
    excerpt: 'Understanding the signs of stress and anxiety, plus practical coping strategies.',
    category: 'Mental Health',
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-20',
    image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Childhood Vaccinations: What Parents Need to Know',
    excerpt: 'A complete guide to childhood immunizations, schedules, and addressing common concerns.',
    category: 'Pediatrics',
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-15',
    image: 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '9 min read',
  },
  {
    id: 7,
    title: 'Heart Health: Simple Steps to Reduce Your Risk',
    excerpt: 'Evidence-based strategies for maintaining cardiovascular health and preventing heart disease.',
    category: 'Heart Health',
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-10',
    image: 'https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
  },
  {
    id: 8,
    title: 'Sleep Better: A Guide to Improving Sleep Quality',
    excerpt: 'Practical tips for establishing healthy sleep habits and overcoming common sleep issues.',
    category: 'Wellness',
    author: 'Dr. Sarah Mitchell',
    date: '2024-02-05',
    image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
  },
  {
    id: 9,
    title: 'Flu Season Preparation: What You Need to Know',
    excerpt: 'Everything you need to know about flu prevention, vaccination, and treatment.',
    category: 'Preventive Care',
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-30',
    image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
  },
];

const categories = ['All', 'Preventive Care', 'Chronic Disease', 'Nutrition', 'Mental Health', 'Pediatrics', 'Heart Health', 'Wellness', 'Allergies'];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert insights, health tips, and medical advice from Dr. Mitchell
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg bg-white text-gray-900"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPosts.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-8">
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="flex-1 min-w-[320px] max-w-[450px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0066CC] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="text-[#0066CC] hover:text-[#0052A3]">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? 'default' : 'outline'}
                      onClick={() => setCurrentPage(index + 1)}
                      className={currentPage === index + 1 ? 'bg-[#0066CC]' : ''}
                    >
                      {index + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
