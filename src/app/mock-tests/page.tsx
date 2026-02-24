import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Clock, ClipboardList, BarChart3, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mock Tests',
    description: 'Practice with exam-pattern mock tests for Bank, SSC, ADRE and Government exams at Achievers\' Institute.',
};

const mockTests = [
    { id: '1', title: 'ADRE 3.0 Full Length Mock Test — Set 1', category: 'Assam Government', questions: 100, duration: 120, attempts: 850 },
    { id: '2', title: 'SBI PO Prelims Mock Test 2025', category: 'Banking', questions: 100, duration: 60, attempts: 1200 },
    { id: '3', title: 'IBPS Clerk Pre Mock Test', category: 'Banking', questions: 100, duration: 60, attempts: 980 },
    { id: '4', title: 'SSC CGL Tier-I Mock Test', category: 'SSC', questions: 100, duration: 60, attempts: 750 },
    { id: '5', title: 'Quantitative Aptitude Practice Set', category: 'Banking', questions: 50, duration: 30, attempts: 1500 },
    { id: '6', title: 'Reasoning Ability Practice Test', category: 'Banking', questions: 50, duration: 30, attempts: 1100 },
    { id: '7', title: 'English Language Practice Set', category: 'Banking', questions: 40, duration: 25, attempts: 900 },
    { id: '8', title: 'General Awareness — Assam Special', category: 'Assam Government', questions: 50, duration: 30, attempts: 650 },
];

export default function MockTestsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-surface-dark">
                <section className="gradient-hero py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Mock Tests</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Practice with exam-pattern questions and track your performance. Improve your speed and accuracy with our curated mock test series.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {mockTests.map((test) => (
                            <div key={test.id} className="bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-6">
                                <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-4">{test.category}</span>
                                <h3 className="font-bold text-navy text-sm mb-4 line-clamp-2">{test.title}</h3>
                                <div className="space-y-2.5 mb-5">
                                    <div className="flex items-center gap-2 text-xs text-navy-soft">
                                        <ClipboardList className="w-3.5 h-3.5 text-primary" /> {test.questions} Questions
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-navy-soft">
                                        <Clock className="w-3.5 h-3.5 text-primary" /> {test.duration} minutes
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-navy-soft">
                                        <BarChart3 className="w-3.5 h-3.5 text-primary" /> {test.attempts.toLocaleString()} attempts
                                    </div>
                                </div>
                                <Link href="/login" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity">
                                    Start Test <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
