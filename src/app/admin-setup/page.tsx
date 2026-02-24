'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createUserProfile } from '@/lib/firestore';
import toast from 'react-hot-toast';
import { GraduationCap, Shield, CheckCircle } from 'lucide-react';

export default function AdminSetupPage() {
    const { user, refreshProfile, role } = useAuth();
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSetup = async () => {
        if (!user) {
            toast.error('Please log in first');
            return;
        }
        setLoading(true);
        try {
            await createUserProfile(user.uid, {
                email: user.email || '',
                displayName: user.displayName || 'Admin',
                photoURL: user.photoURL || undefined,
                role: 'admin',
                createdAt: new Date().toISOString(),
            });
            await refreshProfile();
            setDone(true);
            toast.success('Admin profile created! You can now access /dashboard/admin');
        } catch (error) {
            console.error(error);
            toast.error('Failed to create profile. Check console for details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-extrabold text-navy mb-2">Admin Setup</h1>
                <p className="text-sm text-navy-soft mb-6">
                    This will create your admin profile in Firestore so you can access the admin dashboard.
                </p>

                {!user ? (
                    <div className="p-4 bg-red-50 rounded-xl text-sm text-error">
                        You must <a href="/login" className="underline font-semibold">log in</a> first before setting up admin access.
                    </div>
                ) : done || role === 'admin' ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-xl flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success shrink-0" />
                            <p className="text-sm text-green-800 font-medium">
                                Admin profile is set up! You&apos;re good to go.
                            </p>
                        </div>
                        <a
                            href="/dashboard/admin"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg"
                        >
                            <GraduationCap className="w-4 h-4" /> Go to Admin Dashboard
                        </a>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="p-4 bg-surface-dark rounded-xl text-left text-sm text-navy-soft">
                            <p className="font-semibold text-navy mb-1">Logged in as:</p>
                            <p>{user.displayName || 'No name'}</p>
                            <p className="text-xs">{user.email}</p>
                            <p className="text-xs mt-1 text-navy-soft">UID: {user.uid}</p>
                        </div>
                        <button
                            onClick={handleSetup}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
                        >
                            {loading ? (
                                <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            ) : (
                                <>
                                    <Shield className="w-4 h-4" /> Create Admin Profile
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
