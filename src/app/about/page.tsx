import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, BookMarked, Target, Users, GraduationCap, Award, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Achievers\' Institute — our story, mission, and commitment to affordable education in Assam.',
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="gradient-hero py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                            About Us
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                            Lighting the Torch of Knowledge<br />in <span className="text-gradient">North East</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Learn about who we are, what we do, and why we love our work. It&apos;s all about our team and our mission to serve you better.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 bg-surface">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 rounded-full">Our Story</span>
                                <h2 className="text-3xl font-extrabold text-navy mb-6">How It All Started</h2>
                                <p className="text-navy-soft leading-relaxed mb-4">
                                    We have started this with a vision to provide cheap and best quality education to the people of the northeast. We generally provide exclusive courses crafted by the Achievers&apos; Institute.
                                </p>
                                <p className="text-navy-soft leading-relaxed mb-4">
                                    Dive into an intensive training regime aimed at equipping you with the tools, strategies, and knowledge required to secure your dream government job.
                                </p>
                                <p className="text-navy-soft leading-relaxed">
                                    Each course is crafted to ensure comprehensive preparation, equipping you with the necessary skills and knowledge to secure a coveted government job. Our focus is on making high-level education accessible and achievable for everyone.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-10 text-white">
                                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    At Achievers&apos; Institute, our mission is to illuminate your path to success. We believe in nurturing talent, honing skills, and paving the way for aspirants like you to achieve big!
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-2xl font-extrabold">10K+</p>
                                        <p className="text-xs text-slate-400">Students</p>
                                    </div>
                                    <div className="text-center">
                                        <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-2xl font-extrabold">95%</p>
                                        <p className="text-xs text-slate-400">Success Rate</p>
                                    </div>
                                    <div className="text-center">
                                        <BookMarked className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-2xl font-extrabold">20+</p>
                                        <p className="text-xs text-slate-400">Courses</p>
                                    </div>
                                    <div className="text-center">
                                        <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-2xl font-extrabold">5+</p>
                                        <p className="text-xs text-slate-400">Years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Things that make us proud */}
                <section className="py-20 bg-surface-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 rounded-full">
                            What Makes Us Different
                        </span>
                        <h2 className="text-3xl font-extrabold text-navy mb-4">Things That Make Us Proud</h2>
                        <p className="text-navy-soft max-w-2xl mx-auto mb-14">What you will achieve with us</p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Compass className="w-8 h-8" />, title: 'Guidance', desc: 'Comprehensive guidance tailored to the intricacies of Assam\'s government job exams.', color: 'from-blue-500 to-blue-600' },
                                { icon: <BookMarked className="w-8 h-8" />, title: 'Modules', desc: 'Dedicated and exam-specific modules and notes crafted by top educators.', color: 'from-emerald-500 to-emerald-600' },
                                { icon: <Target className="w-8 h-8" />, title: 'Strategy', desc: 'Expert-led step-by-step strategies to excel in various government exams.', color: 'from-amber-500 to-amber-600' },
                                { icon: <Users className="w-8 h-8" />, title: 'Community', desc: 'A community of like-minded achievers striving for success, offering support and camaraderie.', color: 'from-purple-500 to-purple-600' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-5`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-navy-soft leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
