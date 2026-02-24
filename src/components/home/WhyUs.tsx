import { Compass, BookMarked, Target, Users } from 'lucide-react';

const pillars = [
    {
        icon: <Compass className="w-7 h-7" />,
        title: 'Guidance',
        description: 'Comprehensive guidance tailored to the intricacies of Assam\'s government job exams.',
        color: 'from-blue-500 to-blue-600',
    },
    {
        icon: <BookMarked className="w-7 h-7" />,
        title: 'Modules',
        description: 'Dedicated and exam-specific modules and notes crafted by top educators.',
        color: 'from-emerald-500 to-emerald-600',
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: 'Strategy',
        description: 'Expert-led step-by-step strategies to excel in various government exams.',
        color: 'from-amber-500 to-amber-600',
    },
    {
        icon: <Users className="w-7 h-7" />,
        title: 'Community',
        description: 'A community of like-minded achievers striving for success, offering support and camaraderie.',
        color: 'from-purple-500 to-purple-600',
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Story */}
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary-50 rounded-full">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6">
                            Our Story
                        </h2>
                        <p className="text-navy-soft leading-relaxed mb-6">
                            We started with a simple yet powerful goal: to provide top-quality, affordable education in the northeast region. Our courses, carefully developed by the experts at Achievers&apos; Institute, are more than just lessons – they are a pathway to success.
                        </p>
                        <p className="text-navy-soft leading-relaxed mb-6">
                            Each course is crafted to ensure comprehensive preparation, equipping you with the necessary skills and knowledge to secure a coveted government job. Our focus is on making high-level education accessible and achievable for everyone.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="text-center">
                                <p className="text-3xl font-extrabold text-primary">5+</p>
                                <p className="text-xs text-navy-soft mt-1">Years Experience</p>
                            </div>
                            <div className="w-px h-12 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-extrabold text-primary">50+</p>
                                <p className="text-xs text-navy-soft mt-1">Expert Instructors</p>
                            </div>
                            <div className="w-px h-12 bg-border" />
                            <div className="text-center">
                                <p className="text-3xl font-extrabold text-primary">10K+</p>
                                <p className="text-xs text-navy-soft mt-1">Students Enrolled</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Pillars */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {pillars.map((pillar, i) => (
                            <div
                                key={pillar.title}
                                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-4`}>
                                    {pillar.icon}
                                </div>
                                <h3 className="font-bold text-navy mb-2">{pillar.title}</h3>
                                <p className="text-sm text-navy-soft leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
