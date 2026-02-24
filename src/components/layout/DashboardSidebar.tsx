'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    LayoutDashboard, BookOpen, FileText, Users, Settings,
    BarChart3, MessageSquare, Tag, PenTool, GraduationCap,
    ClipboardList, User, LogOut, ChevronLeft
} from 'lucide-react';

interface SidebarLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const adminLinks: SidebarLink[] = [
    { label: 'Dashboard', href: '/dashboard/admin', icon: <LayoutDashboard className="w-4.5 h-4.5" /> },
    { label: 'Courses', href: '/dashboard/admin/courses', icon: <BookOpen className="w-4.5 h-4.5" /> },
    { label: 'Students', href: '/dashboard/admin/students', icon: <Users className="w-4.5 h-4.5" /> },
    { label: 'Categories', href: '/dashboard/admin/categories', icon: <Tag className="w-4.5 h-4.5" /> },
    { label: 'Mock Tests', href: '/dashboard/admin/mock-tests', icon: <ClipboardList className="w-4.5 h-4.5" /> },
    { label: 'Blog Posts', href: '/dashboard/admin/blog', icon: <PenTool className="w-4.5 h-4.5" /> },
    { label: 'Messages', href: '/dashboard/admin/messages', icon: <MessageSquare className="w-4.5 h-4.5" /> },
    { label: 'Analytics', href: '/dashboard/admin/analytics', icon: <BarChart3 className="w-4.5 h-4.5" /> },
];

const studentLinks: SidebarLink[] = [
    { label: 'Dashboard', href: '/dashboard/student', icon: <LayoutDashboard className="w-4.5 h-4.5" /> },
    { label: 'My Courses', href: '/dashboard/student/courses', icon: <BookOpen className="w-4.5 h-4.5" /> },
    { label: 'Mock Tests', href: '/dashboard/student/mock-tests', icon: <ClipboardList className="w-4.5 h-4.5" /> },
    { label: 'Profile', href: '/dashboard/student/profile', icon: <User className="w-4.5 h-4.5" /> },
];

const parentLinks: SidebarLink[] = [
    { label: 'Dashboard', href: '/dashboard/parent', icon: <LayoutDashboard className="w-4.5 h-4.5" /> },
    { label: 'My Children', href: '/dashboard/parent/children', icon: <Users className="w-4.5 h-4.5" /> },
    { label: 'Profile', href: '/dashboard/parent/profile', icon: <User className="w-4.5 h-4.5" /> },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { role, userProfile, logout } = useAuth();

    const links = role === 'admin' ? adminLinks : role === 'parent' ? parentLinks : studentLinks;

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-navy text-white flex flex-col">
            {/* Logo */}
            <div className="p-5 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                        <GraduationCap className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                        <span className="text-sm font-bold">Achievers&apos;</span>
                        <span className="text-sm font-bold text-primary"> Institute</span>
                    </div>
                </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href || (link.href !== '/dashboard/admin' && link.href !== '/dashboard/student' && link.href !== '/dashboard/parent' && pathname.startsWith(link.href));
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive
                                    ? 'bg-primary text-white shadow-md'
                                    : 'text-slate-400 hover:text-white hover:bg-white/8'
                                }`}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            {/* User section */}
            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-sm font-bold shrink-0">
                        {userProfile?.displayName?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{userProfile?.displayName || 'User'}</p>
                        <p className="text-[11px] text-slate-400 truncate">{userProfile?.email}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Link href="/"
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs text-slate-400 hover:text-white rounded-md hover:bg-white/8 transition-colors">
                        <ChevronLeft className="w-3 h-3" /> Back
                    </Link>
                    <button
                        onClick={logout}
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs text-slate-400 hover:text-red-400 rounded-md hover:bg-red-500/10 transition-colors">
                        <LogOut className="w-3 h-3" /> Logout
                    </button>
                </div>
            </div>
        </aside>
    );
}
