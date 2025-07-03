// export default function Img1DetailPage() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <img
//         src="/HomePic1.jpg"
//         alt="House"
//         className="w-20 h-32 object-cover"
//       />

//       <h2 className="text-3xl font-bold mt-4">Serenity Suites</h2>
//       <p className="text-gray-500">$2,50,000 | Chicago</p>

//       <ul className="list-disc ml-5 mt-3 text-lg">
//         <li>3 Bedrooms, 2 Bathrooms</li>
//         <li>Private Garden and Garage</li>
//         <li>Modern Interiors</li>
//         <li>Close to downtown Chicago</li>
//       </ul>
//     </div>
//   );
// }

// components/ProjectModal.js
export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-56 object-cover"
        />

        {/* Text */}
        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
        <p className="text-gray-500">
          {project.price} | {project.location}
        </p>

        <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
          {project.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
