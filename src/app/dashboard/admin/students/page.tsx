'use client';

import { Search, Eye, Mail, Shield } from 'lucide-react';
import { useState } from 'react';

const students = [
    { id: 's1', name: 'Priya Das', email: 'priya@example.com', role: 'student', courses: 3, joined: '2025-01-15', status: 'Active' },
    { id: 's2', name: 'Ankit Bora', email: 'ankit@example.com', role: 'student', courses: 2, joined: '2025-01-20', status: 'Active' },
    { id: 's3', name: 'Sneha Kalita', email: 'sneha@example.com', role: 'student', courses: 1, joined: '2025-02-01', status: 'Active' },
    { id: 's4', name: 'Rohit Deka', email: 'rohit@example.com', role: 'student', courses: 2, joined: '2025-02-05', status: 'Active' },
    { id: 's5', name: 'Meghna Sarma', email: 'meghna@example.com', role: 'student', courses: 1, joined: '2025-02-10', status: 'Inactive' },
    { id: 's6', name: 'Bipul Hazarika', email: 'bipul@example.com', role: 'parent', courses: 0, joined: '2025-02-12', status: 'Active' },
    { id: 's7', name: 'Jutika Baruah', email: 'jutika@example.com', role: 'student', courses: 4, joined: '2024-12-20', status: 'Active' },
    { id: 's8', name: 'Kamal Nath', email: 'kamal@example.com', role: 'student', courses: 1, joined: '2025-02-18', status: 'Active' },
];

export default function AdminStudentsPage() {
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    const filtered = students.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter === 'all' || s.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-extrabold text-navy mb-1">Student Management</h1>
                    <p className="text-sm text-navy-soft">{students.length} users total</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or email..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none bg-white" />
                </div>
                <div className="flex gap-2">
                    {['all', 'student', 'parent'].map(r => (
                        <button key={r} onClick={() => setRoleFilter(r)}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all capitalize ${roleFilter === r ? 'border-primary bg-primary text-white' : 'border-border bg-white text-navy-soft hover:border-primary'
                                }`}>
                            {r === 'all' ? 'All' : r}s
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-dark border-b border-border">
                            <th className="text-left text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">User</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Role</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Courses</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Joined</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Status</th>
                            <th className="text-right text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {filtered.map(user => (
                            <tr key={user.id} className="hover:bg-surface-hover transition-colors">
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-navy">{user.name}</p>
                                            <p className="text-[11px] text-navy-soft">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 py-4 text-center">
                                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full capitalize ${user.role === 'parent' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        <Shield className="w-2.5 h-2.5" /> {user.role}
                                    </span>
                                </td>
                                <td className="px-3 py-4 text-center text-sm text-navy">{user.courses}</td>
                                <td className="px-3 py-4 text-center text-xs text-navy-soft">
                                    {new Date(user.joined).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </td>
                                <td className="px-3 py-4 text-center">
                                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                        }`}>{user.status}</span>
                                </td>
                                <td className="px-5 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary" title="View">
                                            <Eye className="w-3.5 h-3.5" />
                                        </button>
                                        <button className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary" title="Email">
                                            <Mail className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
