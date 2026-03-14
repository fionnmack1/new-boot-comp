export default function BootCard({ boot }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{boot.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{boot.brand}</p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {boot.surface}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-gray-50 p-3">
          <dt className="text-gray-500">Price</dt>
          <dd className="font-medium">{boot.price}</dd>
        </div>
        <div className="rounded-lg bg-gray-50 p-3">
          <dt className="text-gray-500">Studs</dt>
          <dd className="font-medium">{boot.studs}</dd>
        </div>
        <div className="rounded-lg bg-gray-50 p-3">
          <dt className="text-gray-500">Width</dt>
          <dd className="font-medium">{boot.width}</dd>
        </div>
        <div className="rounded-lg bg-gray-50 p-3">
          <dt className="text-gray-500">Weight</dt>
          <dd className="font-medium">{boot.weight}</dd>
        </div>
      </dl>

      {boot.notes ? (
        <p className="mt-4 text-sm text-gray-600">{boot.notes}</p>
      ) : null}
    </div>
  );
}