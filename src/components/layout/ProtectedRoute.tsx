'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import type { UserRole } from '@/types';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login');
            } else if (allowedRoles && role && !allowedRoles.includes(role)) {
                // Redirect to their dashboard
                const dashboardPath = role === 'admin'
                    ? '/dashboard/admin'
                    : role === 'parent'
                        ? '/dashboard/parent'
                        : '/dashboard/student';
                router.push(dashboardPath);
            }
        }
    }, [user, role, loading, allowedRoles, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-3 border-primary border-t-transparent animate-spin" />
                    <p className="text-sm text-navy-soft">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) return null;
    if (allowedRoles && role && !allowedRoles.includes(role)) return null;

    return <>{children}</>;
}
