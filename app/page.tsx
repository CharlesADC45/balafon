import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
// import TrustedBy from "../components/TrustedBy";
import Products from "../components/Products";
import Features from "../components/Features";
import PreventiveOps from "../components/PreventiveOps";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
// import HomePromoModal from "../components/HomePromoModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* HomePromoModal desactive sur ce site — conserve pour reutilisation sur un autre site */}
      <main id="main-content">
        <Navbar cta={{ label: "Demander une démo", href: "/demo", variant: "primary" }} />
        <Hero />
        <Metrics />
        {/* <TrustedBy /> */}
        <Products />
        <Features />
        <PreventiveOps />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
