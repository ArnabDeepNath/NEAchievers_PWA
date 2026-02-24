'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Phone, Save, Camera } from 'lucide-react';
import toast from 'react-hot-toast';

export default function StudentProfilePage() {
    const { userProfile } = useAuth();
    const [form, setForm] = useState({
        displayName: userProfile?.displayName || '',
        email: userProfile?.email || '',
        phone: userProfile?.phone || '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // In production: call updateUserProfile
        setTimeout(() => {
            toast.success('Profile updated successfully!');
            setLoading(false);
        }, 800);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-extrabold text-navy mb-6">My Profile</h1>

            <div className="bg-white rounded-2xl border border-border p-8">
                {/* Avatar */}
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-border">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                            {userProfile?.displayName?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center hover:border-primary transition-colors">
                            <Camera className="w-3.5 h-3.5 text-navy-soft" />
                        </button>
                    </div>
                    <div>
                        <h2 className="font-bold text-navy text-lg">{userProfile?.displayName || 'User'}</h2>
                        <p className="text-sm text-navy-soft">{userProfile?.email}</p>
                        <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full gradient-primary text-white">
                            {userProfile?.role || 'student'}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                            <input type="text" value={form.displayName} onChange={e => setForm({ ...form, displayName: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                            <input type="email" value={form.email} disabled
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface-dark text-sm outline-none text-navy-soft cursor-not-allowed" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Phone</label>
                        <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                            <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                placeholder="+91-XXXXXXXXXX"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" />
                        </div>
                    </div>
                    <button type="submit" disabled={loading}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-md disabled:opacity-50">
                        {loading ? <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" /> : <Save className="w-4 h-4" />}
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
