// import { useEffect, useState } from "react";

// export default function MyProperties() {
//   const [properties, setProperties] = useState([]);
//   const [myProperties, setMyProperties] = useState([]);
//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     const allProperties = JSON.parse(localStorage.getItem("properties")) || [];

//     if (currentUser) {
//       const filtered = allProperties.filter(
//         (property) => property.userEmail === currentUser.email
//       );
//       setMyProperties(filtered);
//     }
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-4">
//       <h2 className="text-3xl font-bold mb-6 text-center">
//         My Submitted Properties
//       </h2>

//       {myProperties.map((property) => (
//         <div key={property.id} className="border p-4 rounded mb-4">
//           <img
//             src={property.image}
//             alt="Property"
//             className="w-60 h-60 object-cover rounded mb-2"
//           />
//           <h2 className="text-xl font-semibold">{property.title}</h2>
//           <p>Location: {property.location}</p>
//           <p>Price: ₹{property.price}</p>
          
//           <p className="mb-1">Description: {property.description}</p>

//           {/* ✅ Edit & Delete buttons */}
//           <div className="mt-2 space-x-4">
//             <button className="bg-yellow-400 px-3 py-1 rounded">Edit</button>
//             <button className="bg-red-500 text-white px-3 py-1 rounded">
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function MyProperties() {
  const [myProperties, setMyProperties] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // useEffect(() => {
  //   loadMyProperties();
  // }, []);

  // const loadMyProperties = () => {
  //   const allProperties = JSON.parse(localStorage.getItem("properties")) || [];

  //   if (currentUser) {
  //     const filtered = allProperties.filter(
  //       (property) => property.userEmail === currentUser.email
  //     );
  //     setMyProperties(filtered);
  //   }
  // };
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allProperties = JSON.parse(localStorage.getItem("properties")) || [];

    if (currentUser?.role === "seller") {
      const filtered = allProperties.filter(
        (property) => property.userEmail === currentUser.email
      );
      setMyProperties(filtered);
    } else {
      alert("Only sellers can access this page.");
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      const allProperties =
        JSON.parse(localStorage.getItem("properties")) || [];

      const updated = allProperties.filter((property) => property.id !== id);

      localStorage.setItem("properties", JSON.stringify(updated));
      loadMyProperties();
    }
  };

  const handleEditClick = (property) => {
    setEditId(property.id);
    setEditForm({
      title: property.title,
      location: property.location,
      price: property.price,
      image: property.image,
      description: property.description,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const allProperties = JSON.parse(localStorage.getItem("properties")) || [];

    const updated = allProperties.map((property) => {
      if (property.id === editId && property.userEmail === currentUser.email) {
        return {
          ...property,
          ...editForm,
        };
      }
      return property;
    });

    localStorage.setItem("properties", JSON.stringify(updated));
    setEditId(null);
    loadMyProperties();
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Submitted Properties
      </h2>

      {myProperties.map((property) => (
        <div key={property.id} className="border p-4 rounded mb-4">
          {editId === property.id ? (
            <div className="space-y-2">
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="location"
                value={editForm.location}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="number"
                name="price"
                value={editForm.price}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="image"
                value={editForm.image}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
              />
              <div className="flex gap-4">
                <button
                  onClick={handleEditSave}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-300 px-4 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <img
                src={property.image}
                alt="Property"
                className="w-60 h-60 object-cover rounded mb-2"
              />
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p>Location: {property.location}</p>
              <p>Price: ₹{property.price}</p>
              <p className="mb-1">Description: {property.description}</p>

              {currentUser.email === property.userEmail && (
                <div className="mt-2 space-x-4">
                  <button
                    onClick={() => handleEditClick(property)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
