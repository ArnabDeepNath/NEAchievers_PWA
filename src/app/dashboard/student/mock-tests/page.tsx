'use client';

import { ClipboardList, Clock, BarChart3, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

const availableTests = [
    { id: '1', title: 'ADRE 3.0 Full Length Mock — Set 1', questions: 100, duration: 120, category: 'ADRE' },
    { id: '2', title: 'SBI PO Prelims Mock 2025', questions: 100, duration: 60, category: 'Banking' },
    { id: '3', title: 'Quant Aptitude Practice Set', questions: 50, duration: 30, category: 'Banking' },
];

const pastAttempts = [
    { id: 'a1', title: 'SBI PO Mock Test — Set 1', score: 82, total: 100, date: '2 days ago', passed: true },
    { id: 'a2', title: 'ADRE GK Practice Test', score: 38, total: 50, date: '4 days ago', passed: true },
    { id: 'a3', title: 'Reasoning Practice Set 2', score: 28, total: 50, date: '1 week ago', passed: false },
];

export default function StudentMockTestsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-extrabold text-navy mb-6">Mock Tests</h1>

            {/* Available Tests */}
            <h2 className="font-bold text-navy mb-4">Available Tests</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {availableTests.map(test => (
                    <div key={test.id} className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all">
                        <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full mb-3">{test.category}</span>
                        <h3 className="font-bold text-navy text-sm mb-3">{test.title}</h3>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-xs text-navy-soft"><ClipboardList className="w-3.5 h-3.5 text-primary" /> {test.questions} Questions</div>
                            <div className="flex items-center gap-2 text-xs text-navy-soft"><Clock className="w-3.5 h-3.5 text-primary" /> {test.duration} min</div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity">
                            Start Test <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Past Attempts */}
            <h2 className="font-bold text-navy mb-4">Past Attempts</h2>
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-dark border-b border-border">
                            <th className="text-left text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Test</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Score</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Result</th>
                            <th className="text-right text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {pastAttempts.map(attempt => (
                            <tr key={attempt.id} className="hover:bg-surface-hover transition-colors">
                                <td className="px-5 py-4 text-sm font-medium text-navy">{attempt.title}</td>
                                <td className="px-3 py-4 text-center">
                                    <span className="text-sm font-bold text-navy">{attempt.score}/{attempt.total}</span>
                                    <span className="text-[11px] text-navy-soft ml-1">({Math.round(attempt.score / attempt.total * 100)}%)</span>
                                </td>
                                <td className="px-3 py-4 text-center">
                                    {attempt.passed ? (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-success"><CheckCircle className="w-3 h-3" /> Passed</span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-error"><XCircle className="w-3 h-3" /> Failed</span>
                                    )}
                                </td>
                                <td className="px-5 py-4 text-right text-xs text-navy-soft">{attempt.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
