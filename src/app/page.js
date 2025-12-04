import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
