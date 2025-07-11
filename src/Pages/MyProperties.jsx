import { useEffect, useState } from "react";

export default function MyProperties() {
  // const [properties, setProperties] = useState([]);
  const [myProperties, setMyProperties] = useState([]);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allProperties = JSON.parse(localStorage.getItem("properties")) || [];

    if (currentUser) {
      const filtered = allProperties.filter(
        (property) => property.userEmail === currentUser.email
      );
      setMyProperties(filtered);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Submitted Properties
      </h2>

      {myProperties.map((property) => (
        <div key={property.id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p>Location: {property.location}</p>
          <p>Price: ₹{property.price}</p>
          <img
            src={property.imageUrl}
            alt="Property"
            className="w-full h-60 object-cover rounded mb-2"
          />
          <p className="mb-1">Description: {property.description}</p>

          {/* ✅ Edit & Delete buttons */}
          <div className="mt-2 space-x-4">
            <button className="bg-yellow-400 px-3 py-1 rounded">Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

