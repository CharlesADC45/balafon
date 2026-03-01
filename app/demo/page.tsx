import ProspectForm from "@/components/prospectForm";

export default function Home() {
  return (
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
  );
}