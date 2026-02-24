'use client';

import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
    { id: '1', title: 'ADRE 3.0 Preparation Course 2025', progress: 45, totalLessons: 120, completedLessons: 54, totalDuration: '200+ hrs', lastAccessed: '2 hours ago' },
    { id: '2', title: 'SBI | IBPS | RRB Complete Batch 2025-26', progress: 20, totalLessons: 180, completedLessons: 36, totalDuration: '300+ hrs', lastAccessed: '1 day ago' },
    { id: '3', title: 'Quantitative Aptitude & English Mains', progress: 72, totalLessons: 60, completedLessons: 43, totalDuration: '100+ hrs', lastAccessed: '3 hours ago' },
];

export default function StudentCoursesPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-extrabold text-navy mb-6">My Courses</h1>

            <div className="space-y-4">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shrink-0">
                                    <BookOpen className="w-6 h-6 text-white/50" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy mb-1">{course.title}</h3>
                                    <div className="flex items-center gap-3 text-xs text-navy-soft">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.totalDuration}</span>
                                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                    </div>
                                </div>
                            </div>
                            <Link href={`/dashboard/student/courses/${course.id}`}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shrink-0">
                                Continue <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="w-full h-2.5 bg-surface-dark rounded-full overflow-hidden">
                            <div className="h-full gradient-primary rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }} />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-bold text-primary">{course.progress}% complete</span>
                            <span className="text-[11px] text-navy-soft">Last accessed: {course.lastAccessed}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
