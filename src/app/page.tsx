"use client";

import Header from "./components/Header";
import ServicesGrid from "./components/ServicesGrid";
import MobileCalculator from "./components/MobileCalculator";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StarField from "./components/starField";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />
        <ServicesGrid />
        <MobileCalculator />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
