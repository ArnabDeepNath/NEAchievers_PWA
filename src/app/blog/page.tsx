import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog & Updates',
    description: 'Stay informed with the latest blog posts, job updates, and exam notifications from Achievers\' Institute.',
};

const samplePosts = [
    {
        id: '1', title: 'ADRE 3.0 Notification — Everything You Need to Know', excerpt: 'The Assam Direct Recruitment Examination 3.0 notification has been released. Here\'s a complete breakdown of eligibility, syllabus, and preparation strategy.', date: '2025-02-20', slug: 'adre-3-0-notification', category: 'Exam Updates',
    },
    {
        id: '2', title: 'How to Prepare for SBI PO 2025 — Complete Strategy', excerpt: 'A step-by-step guide to crack the SBI PO exam in your first attempt. Learn about the best study plan, important topics, and mock test strategy.', date: '2025-02-15', slug: 'sbi-po-2025-strategy', category: 'Study Tips',
    },
    {
        id: '3', title: 'Top 10 Current Affairs for Government Exams — February 2025', excerpt: 'Stay updated with the most important current affairs topics that are likely to appear in upcoming government examinations.', date: '2025-02-10', slug: 'current-affairs-feb-2025', category: 'Current Affairs',
    },
    {
        id: '4', title: 'Banking Exam Preparation: Mathematics Short Tricks', excerpt: 'Master quantitative aptitude with these proven shortcuts and tricks. Save time in exams and boost your score significantly.', date: '2025-02-05', slug: 'banking-math-tricks', category: 'Study Tips',
    },
    {
        id: '5', title: 'SSC CGL 2025 — Exam Pattern & Syllabus Changes', excerpt: 'SSC has announced changes to the CGL exam pattern. Know what\'s new and how to adapt your preparation accordingly.', date: '2025-01-28', slug: 'ssc-cgl-2025-changes', category: 'Exam Updates',
    },
    {
        id: '6', title: 'IBPS Clerk 2025 — Last Month Preparation Tips', excerpt: 'With just one month left for IBPS Clerk, here are essential tips to maximize your score in the final stretch.', date: '2025-01-20', slug: 'ibps-clerk-tips', category: 'Study Tips',
    },
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-surface-dark">
                <section className="gradient-hero py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Blog & Updates</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Stay informed with our latest blog posts, job updates, exam notifications, and industry insights.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {samplePosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                                    <span className="text-5xl">📝</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">{post.category}</span>
                                        <span className="flex items-center gap-1 text-[11px] text-navy-soft">
                                            <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h2 className="font-bold text-navy text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                                    <p className="text-sm text-navy-soft mb-4 line-clamp-3">{post.excerpt}</p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                                        Read More <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
