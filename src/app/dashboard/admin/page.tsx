'use client';

import { useAuth } from '@/context/AuthContext';
import { Users, BookOpen, TrendingUp, DollarSign, ArrowRight, Plus, Eye, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { label: 'Total Students', value: '1,247', change: '+12%', icon: <Users className="w-5 h-5" />, color: 'text-blue-600 bg-blue-50' },
    { label: 'Active Courses', value: '8', change: '+2', icon: <BookOpen className="w-5 h-5" />, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Enrollments', value: '3,580', change: '+18%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-amber-600 bg-amber-50' },
    { label: 'Revenue', value: '₹12.5L', change: '+24%', icon: <DollarSign className="w-5 h-5" />, color: 'text-purple-600 bg-purple-50' },
];

const recentEnrollments = [
    { student: 'Priya Das', course: 'ADRE 3.0 Preparation', date: '2 hours ago', amount: '₹2,999' },
    { student: 'Ankit Bora', course: 'SBI/IBPS Banking Batch', date: '5 hours ago', amount: '₹3,499' },
    { student: 'Sneha Kalita', course: 'Success Booster 2025', date: '1 day ago', amount: '₹1,999' },
    { student: 'Rohit Deka', course: 'Quantitative Aptitude', date: '1 day ago', amount: '₹1,499' },
    { student: 'Meghna Sarma', course: 'ADRE 3.0 Preparation', date: '2 days ago', amount: '₹2,999' },
];

const courses = [
    { id: '1', title: 'ADRE 3.0 Preparation Course 2025', students: 1500, status: 'Live', revenue: '₹4.5L' },
    { id: '2', title: 'SBI | IBPS | RRB Complete Batch', students: 2200, status: 'Live', revenue: '₹7.7L' },
    { id: '3', title: 'Success Booster 2025–26', students: 980, status: 'Active', revenue: '₹1.9L' },
    { id: '4', title: 'Quantitative Aptitude & English', students: 750, status: 'Live', revenue: '₹1.1L' },
];

export default function AdminDashboard() {
    const { userProfile } = useAuth();

    return (
        <div className="max-w-6xl mx-auto">
            {/* Welcome */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-extrabold text-navy mb-1">
                        Admin Dashboard
                    </h1>
                    <p className="text-sm text-navy-soft">Welcome back, {userProfile?.displayName || 'Admin'}. Here&apos;s an overview.</p>
                </div>
                <Link
                    href="/dashboard/admin/courses"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-md"
                >
                    <Plus className="w-4 h-4" /> New Course
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl border border-border p-5">
                        <div className="flex items-center justify-between mb-3">
                            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                                {stat.icon}
                            </div>
                            <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">{stat.change}</span>
                        </div>
                        <p className="text-2xl font-extrabold text-navy">{stat.value}</p>
                        <p className="text-xs text-navy-soft mt-0.5">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Courses Table */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-navy text-lg">Course Overview</h2>
                        <Link href="/dashboard/admin/courses" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                            Manage <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                    <div className="bg-white rounded-2xl border border-border overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-surface-dark border-b border-border">
                                    <th className="text-left text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Course</th>
                                    <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Students</th>
                                    <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Status</th>
                                    <th className="text-right text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {courses.map((course) => (
                                    <tr key={course.id} className="hover:bg-surface-hover transition-colors">
                                        <td className="px-5 py-4">
                                            <p className="text-sm font-medium text-navy line-clamp-1">{course.title}</p>
                                            <p className="text-[11px] text-navy-soft">Revenue: {course.revenue}</p>
                                        </td>
                                        <td className="px-3 py-4 text-center text-sm text-navy">{course.students.toLocaleString()}</td>
                                        <td className="px-3 py-4 text-center">
                                            <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${course.status === 'Live' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                                {course.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary">
                                                    <Eye className="w-3.5 h-3.5" />
                                                </button>
                                                <button className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary">
                                                    <Pencil className="w-3.5 h-3.5" />
                                                </button>
                                                <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-navy-soft hover:text-error">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Enrollments */}
                <div>
                    <h2 className="font-bold text-navy text-lg mb-4">Recent Enrollments</h2>
                    <div className="bg-white rounded-2xl border border-border p-5">
                        <div className="space-y-4">
                            {recentEnrollments.map((enrollment, i) => (
                                <div key={i} className="flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                                            {enrollment.student.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-navy">{enrollment.student}</p>
                                            <p className="text-[11px] text-navy-soft">{enrollment.course}</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5">{enrollment.date}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-success">{enrollment.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
