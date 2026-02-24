import Link from 'next/link';
import { ArrowRight, Play, Users, BookOpen, Award } from 'lucide-react';

export default function Hero() {
    return (
        <section className="gradient-hero relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-semibold text-primary">Assam&apos;s #1 Coaching Institute</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Quality Education is what we{' '}
                            <span className="text-gradient">Believe & Provide</span>
                        </h1>

                        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                            Secure your future with Assam&apos;s best coaching for Bank, SSC, and State Direct Recruitment Government exams at Achievers&apos; Institute.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 animate-pulse-glow"
                            >
                                Explore Courses <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white border border-white/20 hover:bg-white/8 transition-colors"
                            >
                                <Play className="w-4 h-4" /> Our Story
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 sm:gap-12">
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">10K+</p>
                                <p className="text-xs text-slate-500 mt-1">Happy Students</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">20+</p>
                                <p className="text-xs text-slate-500 mt-1">Expert Courses</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-extrabold text-white">95%</p>
                                <p className="text-xs text-slate-500 mt-1">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Feature Cards */}
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div className="glass-card rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-white font-bold mb-1">Live Classes</h3>
                            <p className="text-xs text-slate-400">Interactive sessions with expert instructors</p>
                        </div>
                        <div className="glass-card rounded-2xl p-6 animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
                            <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-info" />
                            </div>
                            <h3 className="text-white font-bold mb-1">Community</h3>
                            <p className="text-xs text-slate-400">Join like-minded achievers across Assam</p>
                        </div>
                        <div className="glass-card rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-success" />
                            </div>
                            <h3 className="text-white font-bold mb-1">Mock Tests</h3>
                            <p className="text-xs text-slate-400">Practice with exam-pattern questions</p>
                        </div>
                        <div className="glass-card rounded-2xl p-6 animate-fade-in-up mt-8" style={{ animationDelay: '0.4s' }}>
                            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-warning" />
                            </div>
                            <h3 className="text-white font-bold mb-1">Study Material</h3>
                            <p className="text-xs text-slate-400">Comprehensive notes & detailed modules</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
