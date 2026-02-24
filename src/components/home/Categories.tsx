import Link from 'next/link';
import { Landmark, Building2, Monitor, FlaskConical, CreditCard, Briefcase, Newspaper, Shield } from 'lucide-react';

const categories = [
    { name: 'Assam Government', count: '5+', icon: <Landmark className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-600', slug: 'assam-government' },
    { name: 'Central Government', count: '2+', icon: <Building2 className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-600', slug: 'central-government' },
    { name: 'Banking IBPS', count: '2+', icon: <CreditCard className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-600', slug: 'banking-ibps' },
    { name: 'Banking Clerk', count: '2+', icon: <Briefcase className="w-6 h-6" />, color: 'bg-amber-500/10 text-amber-600', slug: 'banking-clerk' },
    { name: 'SSC', count: '3+', icon: <Shield className="w-6 h-6" />, color: 'bg-red-500/10 text-red-600', slug: 'ssc' },
    { name: 'Computer Skills', count: '2+', icon: <Monitor className="w-6 h-6" />, color: 'bg-cyan-500/10 text-cyan-600', slug: 'computer-skills' },
    { name: 'Science & Technology', count: '2+', icon: <FlaskConical className="w-6 h-6" />, color: 'bg-pink-500/10 text-pink-600', slug: 'science-technology' },
    { name: 'Current Affairs', count: '3+', icon: <Newspaper className="w-6 h-6" />, color: 'bg-orange-500/10 text-orange-600', slug: 'current-affairs' },
];

export default function Categories() {
    return (
        <section className="py-20 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 rounded-full">
                        Browse by Category
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
                        Explore Our Exam Categories
                    </h2>
                    <p className="text-navy-soft max-w-2xl mx-auto">
                        Choose from a wide range of government exam preparation courses designed specifically for Assam and Northeast aspirants.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.slug}
                            href={`/courses?category=${cat.slug}`}
                            className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 text-center animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-navy text-sm mb-1 group-hover:text-primary transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-xs text-navy-soft">{cat.count} Courses</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
