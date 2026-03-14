

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
} const BootCard = ({ boot }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={boot.image} alt={`${boot.model}`} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="font-bold text-lg mt-2">{boot.brand} - {boot.model}</h2>
      <p className="text-gray-600">Price: ${boot.price}</p>
      <p className="text-gray-600">Rating: {boot.rating}</p>
      <button className="bg-blue-500 text-white py-2 mt-4 rounded">View Details</button>
    </div>
  );
};

export default BootCard;
