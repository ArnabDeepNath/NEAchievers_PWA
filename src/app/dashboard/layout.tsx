'use client';

import DashboardSidebar from '@/components/layout/DashboardSidebar';
import ProtectedRoute from '@/components/layout/ProtectedRoute';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-surface-dark">
                <DashboardSidebar />
                <main className="flex-1 ml-64 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    );
}
