import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white" dir="rtl">
      <Header />
      <Hero />
      <Services />
      <About />
      <Courses />
      <Testimonials />
      <Contact />
    </main>
  );
}