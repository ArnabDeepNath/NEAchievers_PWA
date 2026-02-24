import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Mock Tests', href: '/mock-tests' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

const resources = [
    { label: 'Blog & Updates', href: '/blog' },
    { label: 'Student Registration', href: '/register' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
    return (
        <footer className="gradient-hero text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-lg font-bold">Achievers&apos;</span>
                                <span className="text-lg font-bold text-primary"> Institute</span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-5">
                            We are dedicated to providing quality education at the most affordable price for the people of Assam.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/achievers.institute123" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/achievers_institute123" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.youtube.com/@achieversInstitute123" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <a href="mailto:achieversinfinite@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    achieversinfinite@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <a href="tel:+918296277890" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    +91-8296277890
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span className="text-sm text-slate-400">Assam, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Achievers&apos; Institute. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
