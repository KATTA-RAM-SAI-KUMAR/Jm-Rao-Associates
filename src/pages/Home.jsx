import Hero from "../components/Hero";
import Services from "../components/Services";
import TaxCalculator from "../components/TaxCalculator";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Location from "../components/Location";
export default function Home() {
  return (
    <div className="pt-20 bg-bg">  {/* 👈 THIS FIXES OVERLAP */}
      <Hero />
      <Services />
      <TaxCalculator />
      <Location />
      <Footer />
    </div>
  );
}