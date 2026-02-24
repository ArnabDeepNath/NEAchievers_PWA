import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Categories from '@/components/home/Categories';
import WhyUs from '@/components/home/WhyUs';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <Categories />
        <WhyUs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
