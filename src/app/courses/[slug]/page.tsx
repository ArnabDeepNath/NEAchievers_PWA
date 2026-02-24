import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { BookOpen, Clock, Users, Star, CheckCircle, Play, ArrowRight } from 'lucide-react';

// Pre-render all course slugs for static export
export function generateStaticParams() {
    return [
        { slug: 'adre-3-0-preparation-course' },
        { slug: 'sbi-ibps-rrb-ntpc-railways' },
        { slug: 'success-booster-2025-26' },
        { slug: 'quantitative-aptitude-english-mains' },
        { slug: 'complete-master-course-bank-po' },
        { slug: 'comprehensive-course-bank-po' },
        { slug: 'adre-2-master-course' },
        { slug: 'maths-mastery-banking' },
    ];
}

export default function CourseDetailPage() {
    const course = {
        title: 'ADRE 3.0 Preparation Course 2025',
        shortDescription: 'Assam Direct Recruitment Exam Coaching (Grade III & Grade IV)',
        description: 'This comprehensive course is designed for aspirants preparing for the Assam Direct Recruitment Examination (ADRE) 3.0. Cover all essential topics including General Knowledge, Mathematics, English, Reasoning, and Assam-specific subjects. Get expert guidance, practice tests, and detailed study materials to ensure your success.',
        category: 'Assam Government',
        price: 2999,
        originalPrice: 5999,
        totalLessons: 120,
        totalDuration: '200+ hours',
        enrolledCount: 1500,
        rating: 4.8,
        isLive: true,
        instructorName: 'Achievers\' Institute Faculty',
        level: 'All Levels',
    };

    const curriculum = [
        { section: 'General Knowledge & Current Affairs', lessons: ['Introduction to GK', 'Indian History Overview', 'Assam History & Culture', 'Indian Polity Basics', 'Geography of India & Assam', 'Current Affairs Practice'] },
        { section: 'Mathematics & Reasoning', lessons: ['Number System', 'Algebra & Equations', 'Geometry & Mensuration', 'Data Interpretation', 'Logical Reasoning', 'Analytical Reasoning'] },
        { section: 'English & Communication', lessons: ['Grammar Fundamentals', 'Vocabulary Building', 'Reading Comprehension', 'Error Detection', 'Sentence Improvement'] },
        { section: 'Mock Tests & Practice', lessons: ['Full Length Mock Test 1', 'Full Length Mock Test 2', 'Sectional Test Series', 'Previous Year Papers Analysis'] },
    ];

    const features = [
        'Live interactive classes with expert faculty',
        'Detailed study material & notes',
        'Regular doubt clearing sessions',
        'Weekly mock test series',
        'Previous year paper analysis',
        'Performance tracking & analytics',
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="gradient-hero py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{course.category}</span>
                                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">{course.level}</span>
                                    {course.isLive && (
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" /> LIVE
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{course.title}</h1>
                                <p className="text-lg text-slate-400 mb-6">{course.shortDescription}</p>
                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
                                    <span className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 text-warning fill-warning" />
                                        <strong className="text-white">{course.rating}</strong> rating
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Users className="w-4 h-4" /> {course.enrolledCount.toLocaleString()} students
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" /> {course.totalDuration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <BookOpen className="w-4 h-4" /> {course.totalLessons} lessons
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500">Created by <strong className="text-slate-300">{course.instructorName}</strong></p>
                            </div>

                            {/* Price Card */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 self-start">
                                <div className="h-40 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                        <Play className="w-6 h-6 text-white ml-1" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl font-extrabold text-navy">₹{course.price.toLocaleString()}</span>
                                    <span className="text-lg text-navy-soft line-through">₹{course.originalPrice.toLocaleString()}</span>
                                    <span className="px-2 py-1 text-xs font-bold text-success bg-success/10 rounded-full">
                                        {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                                    </span>
                                </div>
                                <Link
                                    href="/register"
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg mb-3"
                                >
                                    Enroll Now <ArrowRight className="w-4 h-4" />
                                </Link>
                                <p className="text-[11px] text-center text-navy-soft">30-Day Money Back Guarantee</p>

                                <hr className="my-5 border-border" />

                                <h4 className="font-bold text-navy text-sm mb-3">This course includes:</h4>
                                <ul className="space-y-2.5">
                                    {features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-navy-soft">
                                            <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="lg:w-2/3">
                        {/* About */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-extrabold text-navy mb-4">About This Course</h2>
                            <p className="text-navy-soft leading-relaxed">{course.description}</p>
                        </div>

                        {/* Curriculum */}
                        <div>
                            <h2 className="text-2xl font-extrabold text-navy mb-6">Course Curriculum</h2>
                            <div className="space-y-4">
                                {curriculum.map((section, i) => (
                                    <div key={i} className="border border-border rounded-2xl overflow-hidden">
                                        <div className="bg-surface-dark px-6 py-4 flex items-center justify-between">
                                            <h3 className="font-bold text-navy text-sm">{section.section}</h3>
                                            <span className="text-xs text-navy-soft">{section.lessons.length} lessons</span>
                                        </div>
                                        <ul className="divide-y divide-border">
                                            {section.lessons.map((lesson, j) => (
                                                <li key={j} className="flex items-center gap-3 px-6 py-3.5 text-sm text-navy-soft">
                                                    <Play className="w-3.5 h-3.5 text-primary shrink-0" /> {lesson}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
