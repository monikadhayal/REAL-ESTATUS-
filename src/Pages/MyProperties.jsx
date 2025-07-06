import { useEffect, useState } from "react";

export default function MyProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("properties")) || [];
    setProperties(data);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Submitted Properties
      </h2>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600">
          No properties submitted yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow rounded-xl relative"
            >
              {prop.image && (
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h3 className="text-xl font-semibold">{prop.title}</h3>
              <p className="text-gray-600">{prop.location}</p>
              <p className="text-gray-800 font-bold">{prop.price}</p>
              <p className="text-sm mt-2">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
