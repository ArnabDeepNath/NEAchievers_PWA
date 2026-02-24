'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // In production, save to Firestore
        setTimeout(() => {
            toast.success('Message sent successfully! We\'ll get back to you soon.');
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <section className="gradient-hero py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Contact Us</h1>
                        <p className="text-slate-400 max-w-lg mx-auto">Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-bold text-navy mb-1">Email</h3>
                                <a href="mailto:achieversinfinite@gmail.com" className="text-sm text-primary hover:underline">achieversinfinite@gmail.com</a>
                            </div>
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-bold text-navy mb-1">Phone</h3>
                                <a href="tel:+918296277890" className="text-sm text-primary hover:underline">+91-8296277890</a>
                            </div>
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-bold text-navy mb-1">Location</h3>
                                <p className="text-sm text-navy-soft">Assam, India</p>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/achievers.institute123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors">
                                    <FaFacebookF className="w-4 h-4" />
                                </a>
                                <a href="https://www.instagram.com/achievers_institute123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors">
                                    <FaInstagram className="w-4 h-4" />
                                </a>
                                <a href="https://www.youtube.com/@achieversInstitute123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white hover:bg-primary transition-colors">
                                    <FaYoutube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8">
                                <h2 className="text-xl font-extrabold text-navy mb-6">Send us a Message</h2>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Name</label>
                                        <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" required />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Email</label>
                                        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" required />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Phone</label>
                                        <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91-XXXXXXXXXX" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Subject</label>
                                        <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" required />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Message</label>
                                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none resize-none" required />
                                </div>
                                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50">
                                    {loading ? <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" /> : <><Send className="w-4 h-4" /> Send Message</>}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
