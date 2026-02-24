import Link from 'next/link';
import { BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';

// Sample courses data — in production this would come from Firestore
const sampleCourses = [
    {
        id: '1',
        title: 'ADRE 3.0 Preparation Course 2025',
        shortDescription: 'Assam Direct Recruitment Exam Coaching (Grade III & Grade IV)',
        category: 'Assam Government',
        price: 2999,
        originalPrice: 5999,
        totalLessons: 120,
        totalDuration: '200+ hrs',
        enrolledCount: 1500,
        rating: 4.8,
        isLive: true,
        slug: 'adre-3-0-preparation-course',
        thumbnailURL: '',
    },
    {
        id: '2',
        title: 'SBI | IBPS | RRB | NTPC | Railways 2025-26',
        shortDescription: 'Complete Online Batch – Banking & Railway Exams Preparation',
        category: 'Banking',
        price: 3499,
        originalPrice: 6999,
        totalLessons: 180,
        totalDuration: '300+ hrs',
        enrolledCount: 2200,
        rating: 4.9,
        isLive: true,
        slug: 'sbi-ibps-rrb-ntpc-railways',
        thumbnailURL: '',
    },
    {
        id: '3',
        title: 'Success Booster 2025–26',
        shortDescription: 'Complete Preparation for Banking, Insurance & SSC Exams',
        category: 'SSC',
        price: 1999,
        originalPrice: 3999,
        totalLessons: 90,
        totalDuration: '150+ hrs',
        enrolledCount: 980,
        rating: 4.7,
        isLive: false,
        slug: 'success-booster-2025-26',
        thumbnailURL: '',
    },
    {
        id: '4',
        title: 'Quantitative Aptitude & English Mains',
        shortDescription: 'Classes for All Bank/Insurance Exams',
        category: 'Banking',
        price: 1499,
        originalPrice: 2999,
        totalLessons: 60,
        totalDuration: '100+ hrs',
        enrolledCount: 750,
        rating: 4.6,
        isLive: true,
        slug: 'quantitative-aptitude-english-mains',
        thumbnailURL: '',
    },
];

export default function FeaturedCourses() {
    return (
        <section className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 rounded-full">
                        Featured Courses
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
                        Learn from the Best
                    </h2>
                    <p className="text-navy-soft max-w-2xl mx-auto">
                        Learning often happens in the classroom but it doesn&apos;t have to. Learn with Achievers&apos; Institute to facilitate the learning experiences no matter the context.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sampleCourses.map((course, i) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.slug}`}
                            className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Thumbnail placeholder */}
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
                            </div>

                            <div className="p-5">
                                <h3 className="font-bold text-navy text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-navy-soft mb-3 line-clamp-2">{course.shortDescription}</p>

                                {/* Meta */}
                                <div className="flex items-center gap-3 text-[11px] text-navy-soft mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {course.totalDuration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" /> {course.totalLessons} lessons
                                    </span>
                                </div>

                                {/* Rating & students */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                                        <span className="text-xs font-bold text-navy">{course.rating}</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-[11px] text-navy-soft">
                                        <Users className="w-3 h-3" /> {course.enrolledCount.toLocaleString()} students
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between pt-3 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-extrabold text-primary">₹{course.price.toLocaleString()}</span>
                                        {course.originalPrice && (
                                            <span className="text-xs text-navy-soft line-through">₹{course.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">
                                        {Math.round((1 - course.price / (course.originalPrice || course.price)) * 100)}% off
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg"
                    >
                        Browse All Courses <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
