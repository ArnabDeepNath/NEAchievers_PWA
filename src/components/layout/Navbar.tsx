'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, GraduationCap, ChevronDown, LogOut, User, LayoutDashboard } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Mock Tests', href: '/mock-tests' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const { user, userProfile, role, logout, loading } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const dashboardPath = role === 'admin'
        ? '/dashboard/admin'
        : role === 'parent'
            ? '/dashboard/parent'
            : '/dashboard/student';

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-navy">Achievers&apos;</span>
                            <span className="text-lg font-bold text-primary"> Institute</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-2 rounded-lg text-sm font-medium text-navy-soft hover:text-primary hover:bg-primary-50 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Area */}
                    <div className="hidden lg:flex items-center gap-3">
                        {loading ? (
                            <div className="w-8 h-8 rounded-full bg-surface-dark animate-pulse" />
                        ) : user && userProfile ? (
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setProfileOpen(!profileOpen)}
                                        className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full border border-border hover:border-primary/30 hover:bg-primary-50 transition-all"
                                    >
                                        <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
                                            {userProfile.displayName?.charAt(0)?.toUpperCase() || 'U'}
                                        </div>
                                        <span className="text-sm font-medium text-navy max-w-[100px] truncate">
                                            {userProfile.displayName || 'User'}
                                        </span>
                                        <ChevronDown className={`w-3.5 h-3.5 text-navy-soft transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {profileOpen && (
                                        <>
                                            <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border z-50 py-2 animate-fade-in-up">
                                                <div className="px-4 py-2.5 border-b border-border">
                                                    <p className="text-sm font-semibold text-navy truncate">{userProfile.displayName}</p>
                                                    <p className="text-xs text-navy-soft truncate">{userProfile.email}</p>
                                                    <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold uppercase rounded-full gradient-primary text-white">
                                                        {role}
                                                    </span>
                                                </div>
                                                <Link
                                                    href={dashboardPath}
                                                    onClick={() => setProfileOpen(false)}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-primary-50 hover:text-primary transition-colors"
                                                >
                                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                                </Link>
                                                <Link
                                                    href={`${dashboardPath}/profile`}
                                                    onClick={() => setProfileOpen(false)}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-primary-50 hover:text-primary transition-colors"
                                                >
                                                    <User className="w-4 h-4" /> Profile
                                                </Link>
                                                <hr className="my-1 border-border" />
                                                <button
                                                    onClick={() => { logout(); setProfileOpen(false); }}
                                                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-error hover:bg-red-50 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4" /> Sign Out
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <button
                                    onClick={logout}
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-error hover:bg-red-50 transition-colors"
                                    title="Sign Out"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-sm font-medium text-navy hover:text-primary transition-colors"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-5 py-2 text-sm font-semibold text-white rounded-lg gradient-primary hover:opacity-90 transition-opacity shadow-md"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-surface-dark transition-colors"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-border bg-white animate-slide-in">
                    <nav className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-navy hover:text-primary hover:bg-primary-50 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="my-3 border-border" />
                        {user ? (
                            <>
                                <Link
                                    href={dashboardPath}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-navy hover:text-primary hover:bg-primary-50"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => { logout(); setMobileOpen(false); }}
                                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-error hover:bg-red-50"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-2 p-2">
                                <Link href="/login" onClick={() => setMobileOpen(false)}
                                    className="flex-1 text-center py-2.5 text-sm font-medium border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                                    Log In
                                </Link>
                                <Link href="/register" onClick={() => setMobileOpen(false)}
                                    className="flex-1 text-center py-2.5 text-sm font-semibold text-white rounded-lg gradient-primary">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
