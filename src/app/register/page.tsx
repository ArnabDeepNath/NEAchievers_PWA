'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, User } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import type { UserRole } from '@/types';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<UserRole>('student');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, loginWithGoogle } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }
        setLoading(true);
        try {
            await register(email, password, name, role);
            toast.success('Account created successfully!');
            router.push('/');
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : 'Registration failed';
            toast.error(msg.includes('already-in-use') ? 'Email already in use' : msg);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        try {
            await loginWithGoogle(role);
            toast.success('Welcome!');
            router.push('/');
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : 'Google sign-in failed';
            toast.error(msg);
        }
    };

    return (
        <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-12">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md relative animate-fade-in-up">
                <Link href="/" className="flex items-center justify-center gap-2.5 mb-8">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-white">Achievers&apos;</span>
                        <span className="text-xl font-bold text-primary"> Institute</span>
                    </div>
                </Link>

                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-2xl font-extrabold text-navy mb-2">Create Account</h1>
                    <p className="text-sm text-navy-soft mb-6">Start your journey to success</p>

                    {/* Role Selection */}
                    <div className="mb-6">
                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-2 block">I am a</label>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { value: 'student' as UserRole, label: '🎓 Student' },
                                { value: 'parent' as UserRole, label: '👨‍👩‍👧 Parent' },
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => setRole(opt.value)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all
                    ${role === opt.value
                                            ? 'border-primary bg-primary-50 text-primary'
                                            : 'border-border text-navy-soft hover:border-primary/30'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Google */}
                    <button
                        onClick={handleGoogle}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border hover:bg-surface-dark transition-colors mb-6"
                    >
                        <FcGoogle className="w-5 h-5" />
                        <span className="text-sm font-medium text-navy">Continue with Google</span>
                    </button>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-border" />
                        <span className="text-xs text-navy-soft">or register with email</span>
                        <div className="flex-1 h-px bg-border" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your full name"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-navy placeholder:text-slate-400 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-navy placeholder:text-slate-400 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Min 6 characters"
                                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-navy placeholder:text-slate-400 outline-none transition-all"
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-soft hover:text-navy"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
                        >
                            {loading ? (
                                <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            ) : (
                                <>Create Account <ArrowRight className="w-4 h-4" /></>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-sm text-navy-soft mt-6">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
