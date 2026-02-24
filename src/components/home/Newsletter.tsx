'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="py-20 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                    Stay Updated
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Want to get special updates from Achievers&apos; Institute?
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    Subscribe to our newsletter for the latest exam notifications, study tips, and exclusive offers.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg shrink-0"
                    >
                        {submitted ? 'Subscribed! ✓' : <><Send className="w-4 h-4" /> Subscribe</>}
                    </button>
                </form>
            </div>
        </section>
    );
}
