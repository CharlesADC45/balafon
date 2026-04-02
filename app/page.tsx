import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import TrustedBy from "../components/TrustedBy";
import Products from "../components/Products";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HomePromoModal from "../components/HomePromoModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <HomePromoModal />
      <main>
        <Navbar />
        <Hero />
        {/* <TrustedBy /> */}
        <Products />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
