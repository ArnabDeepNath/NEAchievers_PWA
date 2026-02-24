'use client';

import { useAuth } from '@/context/AuthContext';
import { Users, BookOpen, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const linkedStudents = [
    {
        id: 's1', name: 'Rahul Sharma', email: 'rahul@example.com',
        enrolledCourses: 3, completedLessons: 133, avgScore: 78, streak: 7,
        courses: [
            { title: 'ADRE 3.0 Preparation', progress: 45 },
            { title: 'SBI/IBPS Banking Batch', progress: 20 },
            { title: 'Quantitative Aptitude', progress: 72 },
        ],
    },
];

export default function ParentDashboard() {
    const { userProfile } = useAuth();

    return (
        <div className="max-w-6xl mx-auto">
            {/* Welcome */}
            <div className="gradient-hero rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative">
                    <h1 className="text-2xl font-extrabold text-white mb-2">
                        Welcome, {userProfile?.displayName?.split(' ')[0] || 'Parent'}! 👨‍👩‍👧
                    </h1>
                    <p className="text-slate-400">Track your child&apos;s learning progress and achievements.</p>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Linked Students', value: '1', icon: <Users className="w-5 h-5" />, color: 'text-blue-600 bg-blue-50' },
                    { label: 'Total Courses', value: '3', icon: <BookOpen className="w-5 h-5" />, color: 'text-emerald-600 bg-emerald-50' },
                    { label: 'Avg. Progress', value: '46%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-amber-600 bg-amber-50' },
                    { label: 'Avg. Score', value: '78%', icon: <Award className="w-5 h-5" />, color: 'text-purple-600 bg-purple-50' },
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

            {/* Students */}
            {linkedStudents.map((student) => (
                <div key={student.id} className="bg-white rounded-2xl border border-border p-6 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                                {student.name.charAt(0)}
                            </div>
                            <div>
                                <h2 className="font-bold text-navy text-lg">{student.name}</h2>
                                <p className="text-xs text-navy-soft">{student.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-6 text-center">
                            <div>
                                <p className="text-lg font-bold text-navy">{student.enrolledCourses}</p>
                                <p className="text-[10px] text-navy-soft">Courses</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-navy">{student.completedLessons}</p>
                                <p className="text-[10px] text-navy-soft">Lessons</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-primary">{student.avgScore}%</p>
                                <p className="text-[10px] text-navy-soft">Avg Score</p>
                            </div>
                            <div>
                                <p className="text-lg font-bold text-success">🔥 {student.streak}</p>
                                <p className="text-[10px] text-navy-soft">Day Streak</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-navy text-sm mb-3">Course Progress</h3>
                    <div className="space-y-3">
                        {student.courses.map((course, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="text-sm text-navy min-w-[200px] truncate">{course.title}</span>
                                <div className="flex-1 h-2 bg-surface-dark rounded-full overflow-hidden">
                                    <div className="h-full gradient-primary rounded-full" style={{ width: `${course.progress}%` }} />
                                </div>
                                <span className="text-xs font-bold text-primary w-12 text-right">{course.progress}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="bg-white rounded-2xl border border-border border-dashed p-8 text-center">
                <Users className="w-10 h-10 text-navy-soft mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-1">Link Another Student</h3>
                <p className="text-sm text-navy-soft mb-4">Connect your child&apos;s account to track their progress</p>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity">
                    Link Student <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}
