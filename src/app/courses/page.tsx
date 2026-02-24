import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { BookOpen, Clock, Users, Star, Search, Filter } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Courses',
    description: 'Browse all courses at Achievers\' Institute — Bank, SSC, ADRE, and Government exam preparation.',
};

const allCourses = [
    {
        id: '1', title: 'ADRE 3.0 Preparation Course 2025', shortDescription: 'Assam Direct Recruitment Exam Coaching (Grade III & Grade IV)',
        category: 'Assam Government', price: 2999, originalPrice: 5999, totalLessons: 120, totalDuration: '200+ hrs',
        enrolledCount: 1500, rating: 4.8, isLive: true, slug: 'adre-3-0-preparation-course', level: 'All Levels',
    },
    {
        id: '2', title: 'SBI | IBPS | RRB | NTPC | Railways 2025-26', shortDescription: 'Complete Online Batch – Banking & Railway Exams Preparation',
        category: 'Banking', price: 3499, originalPrice: 6999, totalLessons: 180, totalDuration: '300+ hrs',
        enrolledCount: 2200, rating: 4.9, isLive: true, slug: 'sbi-ibps-rrb-ntpc-railways', level: 'All Levels',
    },
    {
        id: '3', title: 'Success Booster 2025–26', shortDescription: 'Complete Preparation for Banking, Insurance & SSC Exams',
        category: 'SSC', price: 1999, originalPrice: 3999, totalLessons: 90, totalDuration: '150+ hrs',
        enrolledCount: 980, rating: 4.7, isLive: false, slug: 'success-booster-2025-26', level: 'Beginner',
    },
    {
        id: '4', title: 'Quantitative Aptitude & English Mains', shortDescription: 'Classes for All Bank/Insurance Exams',
        category: 'Banking', price: 1499, originalPrice: 2999, totalLessons: 60, totalDuration: '100+ hrs',
        enrolledCount: 750, rating: 4.6, isLive: true, slug: 'quantitative-aptitude-english-mains', level: 'Intermediate',
    },
    {
        id: '5', title: 'Complete Master Course on Bank PO/Clerk', shortDescription: 'Bank PO/Clerk and RRB NTPC Live Course',
        category: 'Banking', price: 2499, originalPrice: 4999, totalLessons: 150, totalDuration: '250+ hrs',
        enrolledCount: 1100, rating: 4.8, isLive: true, slug: 'complete-master-course-bank-po', level: 'All Levels',
    },
    {
        id: '6', title: 'Comprehensive Course for Bank PO/Clerk', shortDescription: 'Complete recorded course for banking exams',
        category: 'Banking', price: 999, originalPrice: 1999, totalLessons: 80, totalDuration: '120+ hrs',
        enrolledCount: 650, rating: 4.5, isLive: false, slug: 'comprehensive-course-bank-po', level: 'Beginner',
    },
    {
        id: '7', title: 'ADRE 2.0 Master Course', shortDescription: 'Success in ADRE 2.0 – Assam Direct Requirement',
        category: 'Assam Government', price: 1999, originalPrice: 3999, totalLessons: 100, totalDuration: '160+ hrs',
        enrolledCount: 1200, rating: 4.7, isLive: false, slug: 'adre-2-master-course', level: 'All Levels',
    },
    {
        id: '8', title: 'Maths Mastery – Banking Course', shortDescription: 'Best online banking course – Basic to Advance (Live)',
        category: 'Banking', price: 799, originalPrice: 1499, totalLessons: 50, totalDuration: '80+ hrs',
        enrolledCount: 450, rating: 4.4, isLive: true, slug: 'maths-mastery-banking', level: 'Beginner',
    },
];

const categories = ['All', 'Assam Government', 'Banking', 'SSC', 'Central Government'];

export default function CoursesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-surface-dark">
                {/* Header */}
                <section className="gradient-hero py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            Explore Our Courses
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                            Choose from our comprehensive range of government exam preparation courses. Each course is crafted by experts to help you succeed.
                        </p>
                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                            />
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Categories filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <Filter className="w-5 h-5 text-navy-soft mr-2 mt-1" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                  ${cat === 'All'
                                        ? 'border-primary bg-primary text-white'
                                        : 'border-border bg-white text-navy-soft hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Course Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allCourses.map((course) => (
                            <Link
                                key={course.id}
                                href={`/courses/${course.slug}`}
                                className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative h-44 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                                    <BookOpen className="w-12 h-12 text-white/20" />
                                    {course.isLive && (
                                        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
                                        </span>
                                    )}
                                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-primary/90 text-white text-[10px] font-bold rounded-full">
                                        {course.category}
                                    </span>
                                    <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-white/10 text-white text-[10px] font-medium rounded-full">
                                        {course.level}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-navy text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                    <p className="text-xs text-navy-soft mb-3 line-clamp-2">{course.shortDescription}</p>
                                    <div className="flex items-center gap-3 text-[11px] text-navy-soft mb-3">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.totalDuration}</span>
                                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.totalLessons} lessons</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                                            <span className="text-xs font-bold text-navy">{course.rating}</span>
                                        </div>
                                        <span className="flex items-center gap-1 text-[11px] text-navy-soft">
                                            <Users className="w-3 h-3" /> {course.enrolledCount.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t border-border">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-extrabold text-primary">₹{course.price.toLocaleString()}</span>
                                            <span className="text-xs text-navy-soft line-through">₹{course.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">
                                            {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
