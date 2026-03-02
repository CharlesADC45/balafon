import ProspectForm from "@/components/prospectForm";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
    <main>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Demande de démo</h1>
          <p className="text-sm text-gray-500 mb-8">
            (<span className="text-red-500">*</span>) désigne les champs obligatoires.
          </p>
          <ProspectForm />
        </div>
      </div>
    </main>
      <Footer />
    </main>
    </div>
  );
}