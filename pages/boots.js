import BootCard from "@/components/BootCard";
import { boots } from "@/data/boots";

export default function BootsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">All boots</h2>
        <p className="mt-1 text-gray-600">Edit <code className="rounded bg-gray-100 px-2 py-1 text-sm">data/boots.js</code> to add more.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {boots.map((boot) => (<BootCard key={boot.id} boot={boot} />))}
      </div>
    </div>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import BootCard from "../components/BootCard";
import boots from "../data/boots";

const BootsPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">All Football Boots</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boots.map((boot, index) => (
            <BootCard key={index} boot={boot} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BootsPage;

