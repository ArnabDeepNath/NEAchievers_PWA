'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Plus, Search, Eye, Pencil, Trash2, X, Upload, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

interface CourseForm {
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    category: string;
    level: string;
    price: string;
    originalPrice: string;
    isLive: boolean;
    isPublished: boolean;
}

const emptyCourse: CourseForm = {
    title: '', slug: '', shortDescription: '', description: '',
    category: 'Banking', level: 'All Levels', price: '', originalPrice: '',
    isLive: false, isPublished: true,
};

const existingCourses = [
    { id: '1', title: 'ADRE 3.0 Preparation Course 2025', category: 'Assam Government', price: 2999, students: 1500, status: 'Live', isPublished: true },
    { id: '2', title: 'SBI | IBPS | RRB | NTPC | Railways 2025-26', category: 'Banking', price: 3499, students: 2200, status: 'Live', isPublished: true },
    { id: '3', title: 'Success Booster 2025–26', category: 'SSC', price: 1999, students: 980, status: 'Active', isPublished: true },
    { id: '4', title: 'Quantitative Aptitude & English Mains', category: 'Banking', price: 1499, students: 750, status: 'Live', isPublished: true },
    { id: '5', title: 'Complete Master Course on Bank PO/Clerk', category: 'Banking', price: 2499, students: 1100, status: 'Live', isPublished: true },
    { id: '6', title: 'Comprehensive Course for Bank PO/Clerk', category: 'Banking', price: 999, students: 650, status: 'Active', isPublished: true },
    { id: '7', title: 'ADRE 2.0 Master Course', category: 'Assam Government', price: 1999, students: 1200, status: 'Active', isPublished: false },
    { id: '8', title: 'Maths Mastery – Banking Course', category: 'Banking', price: 799, students: 450, status: 'Live', isPublished: true },
];

const categories = ['Banking', 'Assam Government', 'SSC', 'Central Government', 'Current Affairs', 'Computer Skills'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Expert'];

export default function AdminCoursesPage() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<CourseForm>(emptyCourse);
    const [search, setSearch] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    const filteredCourses = existingCourses.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
    );

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const handleTitleChange = (title: string) => {
        setForm({ ...form, title, slug: generateSlug(title) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.title || !form.price) {
            toast.error('Please fill in required fields');
            return;
        }
        // In production: save to Firestore via createCourse / updateCourse
        if (editingId) {
            toast.success('Course updated successfully!');
        } else {
            toast.success('Course created successfully!');
        }
        setForm(emptyCourse);
        setShowForm(false);
        setEditingId(null);
    };

    const handleEdit = (course: typeof existingCourses[0]) => {
        setForm({
            title: course.title,
            slug: generateSlug(course.title),
            shortDescription: '',
            description: '',
            category: course.category,
            level: 'All Levels',
            price: course.price.toString(),
            originalPrice: (course.price * 2).toString(),
            isLive: course.status === 'Live',
            isPublished: course.isPublished,
        });
        setEditingId(course.id);
        setShowForm(true);
    };

    const handleDelete = (id: string) => {
        // In production: call deleteCourse(id)
        toast.success('Course deleted');
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-extrabold text-navy mb-1">Course Management</h1>
                    <p className="text-sm text-navy-soft">{existingCourses.length} courses total</p>
                </div>
                <button
                    onClick={() => { setForm(emptyCourse); setEditingId(null); setShowForm(true); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-md"
                >
                    <Plus className="w-4 h-4" /> Add Course
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-soft" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none bg-white"
                />
            </div>

            {/* Course Table */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-surface-dark border-b border-border">
                            <th className="text-left text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Course</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Category</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Price</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Students</th>
                            <th className="text-center text-xs font-semibold text-navy-soft uppercase tracking-wider px-3 py-3">Status</th>
                            <th className="text-right text-xs font-semibold text-navy-soft uppercase tracking-wider px-5 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {filteredCourses.map((course) => (
                            <tr key={course.id} className="hover:bg-surface-hover transition-colors">
                                <td className="px-5 py-4">
                                    <p className="text-sm font-medium text-navy line-clamp-1">{course.title}</p>
                                </td>
                                <td className="px-3 py-4 text-center">
                                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">{course.category}</span>
                                </td>
                                <td className="px-3 py-4 text-center text-sm font-bold text-navy">₹{course.price.toLocaleString()}</td>
                                <td className="px-3 py-4 text-center text-sm text-navy">{course.students.toLocaleString()}</td>
                                <td className="px-3 py-4 text-center">
                                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${course.status === 'Live' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                                        }`}>
                                        {course.status}
                                    </span>
                                </td>
                                <td className="px-5 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary" title="View">
                                            <Eye className="w-3.5 h-3.5" />
                                        </button>
                                        <button onClick={() => handleEdit(course)} className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors text-navy-soft hover:text-primary" title="Edit">
                                            <Pencil className="w-3.5 h-3.5" />
                                        </button>
                                        <button onClick={() => handleDelete(course.id)} className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-navy-soft hover:text-error" title="Delete">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create/Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                            <h2 className="text-lg font-extrabold text-navy">{editingId ? 'Edit Course' : 'Create New Course'}</h2>
                            <button onClick={() => setShowForm(false)} className="p-1.5 rounded-lg hover:bg-surface-dark transition-colors">
                                <X className="w-5 h-5 text-navy-soft" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Title */}
                            <div>
                                <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Course Title *</label>
                                <input
                                    type="text" value={form.title} onChange={(e) => handleTitleChange(e.target.value)}
                                    placeholder="e.g. ADRE 3.0 Preparation Course 2025"
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none"
                                    required
                                />
                            </div>

                            {/* Slug */}
                            <div>
                                <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">URL Slug</label>
                                <input
                                    type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-dark text-sm outline-none text-navy-soft"
                                />
                            </div>

                            {/* Short Description */}
                            <div>
                                <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Short Description</label>
                                <input
                                    type="text" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                                    placeholder="Brief 1-line description"
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Full Description</label>
                                <textarea
                                    value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                                    rows={4} placeholder="Detailed course description..."
                                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none resize-none"
                                />
                            </div>

                            {/* Category & Level */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Category</label>
                                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none bg-white">
                                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Level</label>
                                    <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none bg-white">
                                        {levels.map(l => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Price (₹) *</label>
                                    <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                                        placeholder="2999" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" required />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Original Price (₹)</label>
                                    <input type="number" value={form.originalPrice} onChange={(e) => setForm({ ...form, originalPrice: e.target.value })}
                                        placeholder="5999" className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none" />
                                </div>
                            </div>

                            {/* Thumbnail Upload */}
                            <div>
                                <label className="text-xs font-semibold text-navy-soft uppercase tracking-wider mb-1.5 block">Course Thumbnail</label>
                                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer">
                                    <Upload className="w-8 h-8 text-navy-soft mx-auto mb-2" />
                                    <p className="text-sm text-navy-soft">Click to upload or drag and drop</p>
                                    <p className="text-[11px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
                                </div>
                            </div>

                            {/* Toggles */}
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={form.isLive} onChange={(e) => setForm({ ...form, isLive: e.target.checked })}
                                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                                    <span className="text-sm text-navy">Live Course</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                                    <span className="text-sm text-navy">Published</span>
                                </label>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-2">
                                <button type="submit"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white gradient-primary hover:opacity-90 transition-opacity shadow-md">
                                    <BookOpen className="w-4 h-4" /> {editingId ? 'Update Course' : 'Create Course'}
                                </button>
                                <button type="button" onClick={() => setShowForm(false)}
                                    className="px-6 py-3 rounded-xl text-sm font-medium border border-border text-navy-soft hover:bg-surface-dark transition-colors">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
