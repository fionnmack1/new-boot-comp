import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Football Boot Comparison</h2>
        <p className="mt-2 text-gray-600">
          A simple place to list boots and compare quick specs. Start by editing {" "}
          <code className="rounded bg-gray-100 px-2 py-1 text-sm">data/boots.js</code>.
        </p>

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
}