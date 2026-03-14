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