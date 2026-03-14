;
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

