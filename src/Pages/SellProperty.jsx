import { useState } from "react";

export default function SellProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const location = e.target[1].value;
    const price = e.target[2].value;
    const image = e.target[3].value; 
    const description = e.target[4].value;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please log in first to add a property.");
      return;
    }

    const newProperty = {
      id: Date.now(), 
      title,
      location,
      price,
      image,
      description,
      userEmail: currentUser.email, 
    };

    const existingProperties =
      JSON.parse(localStorage.getItem("properties")) || [];
    existingProperties.push(newProperty);
    localStorage.setItem("properties", JSON.stringify(existingProperties));

    // alert("Property added successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Sell Your Property
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Property Title"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Property
        </button>
      </form>
    </div>
  );
}
