

        <div className="mt-6">
          <Link
            className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            href="/boots"
          >
            View all boots
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border bg-white p-6">
        <h3 className="text-lg font-semibold">What you can add next</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Images (add an <code>image</code> field and render it in <code>BootCard</code>)</li>
          <li>Filters (brand, surface, price range)</li>
          <li>A compare page (select 2-3 boots and show a table)</li>
        </ul>
      </section>
    </div>
  );
} import Header from "../components/Header";
import Footer from "../components/Footer";
import BootCard from "../components/BootCard";
import boots from "../data/boots";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold">Find the Perfect Football Boots</h1>
          <input type="text" placeholder="Search boots..." className="border rounded p-2 mt-4" />
        </section>
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

export default Home;

