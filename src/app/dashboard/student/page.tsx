'use client';

import { useAuth } from '@/context/AuthContext';
import { BookOpen, Clock, Award, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const enrolledCourses = [
    { id: '1', title: 'ADRE 3.0 Preparation Course 2025', progress: 45, lastAccessed: '2 hours ago', totalLessons: 120, completedLessons: 54 },
    { id: '2', title: 'SBI | IBPS | RRB Complete Batch', progress: 20, lastAccessed: '1 day ago', totalLessons: 180, completedLessons: 36 },
    { id: '3', title: 'Quantitative Aptitude & English Mains', progress: 72, lastAccessed: '3 hours ago', totalLessons: 60, completedLessons: 43 },
];

const recentActivity = [
    { icon: '📚', text: 'Completed "Indian Polity Basics" in ADRE 3.0', time: '2 hours ago' },
    { icon: '✅', text: 'Scored 82% in SBI PO Mock Test — Set 1', time: '5 hours ago' },
    { icon: '📝', text: 'Started "Data Interpretation" module', time: '1 day ago' },
    { icon: '🏆', text: 'Achieved 7-day streak!', time: '1 day ago' },
];

export default function StudentDashboard() {
    const { userProfile } = useAuth();

    return (
        <div className="max-w-6xl mx-auto">
            {/* Welcome */}
            <div className="gradient-hero rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative">
                    <h1 className="text-2xl font-extrabold text-white mb-2">
                        Welcome back, {userProfile?.displayName?.split(' ')[0] || 'Student'}! 👋
                    </h1>
                    <p className="text-slate-400">Continue your learning journey. You&apos;re making great progress!</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Enrolled Courses', value: '3', icon: <BookOpen className="w-5 h-5" />, color: 'text-blue-600 bg-blue-50' },
                    { label: 'Lessons Completed', value: '133', icon: <Award className="w-5 h-5" />, color: 'text-emerald-600 bg-emerald-50' },
                    { label: 'Study Hours', value: '89', icon: <Clock className="w-5 h-5" />, color: 'text-amber-600 bg-amber-50' },
                    { label: 'Avg. Score', value: '78%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-purple-600 bg-purple-50' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl border border-border p-5">
                        <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                            {stat.icon}
                        </div>
                        <p className="text-2xl font-extrabold text-navy">{stat.value}</p>
                        <p className="text-xs text-navy-soft mt-0.5">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Enrolled Courses */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-navy text-lg">My Courses</h2>
                        <Link href="/dashboard/student/courses" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                            View All <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {enrolledCourses.map((course) => (
                            <div key={course.id} className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-bold text-navy text-sm pr-4 line-clamp-1">{course.title}</h3>
                                    <span className="text-xs text-navy-soft shrink-0">{course.lastAccessed}</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-navy-soft mb-3">
                                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                </div>
                                <div className="w-full h-2 bg-surface-dark rounded-full overflow-hidden">
                                    <div
                                        className="h-full gradient-primary rounded-full transition-all duration-500"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs font-bold text-primary">{course.progress}% complete</span>
                                    <Link href={`/dashboard/student/courses/${course.id}`} className="text-xs font-medium text-primary hover:underline">
                                        Continue →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h2 className="font-bold text-navy text-lg mb-4">Recent Activity</h2>
                    <div className="bg-white rounded-2xl border border-border p-5">
                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-lg">{activity.icon}</span>
                                    <div>
                                        <p className="text-sm text-navy">{activity.text}</p>
                                        <p className="text-[11px] text-navy-soft mt-0.5">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
