// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// // import { useNavigate } from "react-router-dom";
// import ProjectModal from "../components/ProjectModal";
// export default function ProjectsPage(Imd1DetailPage) {
//     // const navigate = useNavigate();
    
//     const [selectedProject, setSelectedProject] = useState(null);

//     const projects = [
//       {
//         image: "/HomePic2.jpg",
//         title: "Serenity Suites",
//         price: "$2,50,000",
//         location: "Chicago",
//         details: [
//           "3 Bedrooms, 2 Bathrooms",
//           "Private Garden and Garage",
//           "Modern Interiors",
//           "Close to downtown Chicago",
//         ],
//       },
//       // ...add other projects
//     ];

    
//   return (
//     <div className="min-h-screen bg-white py-10 px-4 mt-10">
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-2xl font-bold">
//           <span className="text-black">Projects</span>{" "}
//           <span className="underline decoration-1">Completed</span>
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Crafting Spaces, Building Legacies—Explore Our Portfolio
//         </p>
//       </div>

//       {/* Swiper Section */}
//       <div className="max-w-6xl mx-auto">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={4}
//           navigation={true}
//           modules={[Navigation]}
//         >
//           {/* Slide 1 */}
//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic1.jpg"
//                 alt="House"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 2 */}
//           <SwiperSlide>
//             <div onClick={handleClick} className="w-full overflow-hidden shadow-lg bg-white rounded-xl cursor-pointer">
//               <img
//                 src="/HomePic2.jpg"
//                 alt="HomePic2"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Serenity Suites
//                 </h3>
//                 <p className="text-sm text-gray-600">$2,50,000 | Chicago</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 3 */}
//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic3.jpg"
//                 alt="HomePic3"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Central Square
//                 </h3>
//                 <p className="text-sm text-gray-600">$2,50,000 | Los Angeles</p>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 4 */}
//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic4.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic5.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic6.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic7.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic8.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic9.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>


//           <SwiperSlide>
//             <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
//               <img
//                 src="/HomePic10.jpg"
//                 alt="HomePic4"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 border-t">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Vista Verde
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   $2,50,000 | San Francisco
//                 </p>
//               </div>
//             </div>


//           </SwiperSlide>

//           {/* Add more slides below if needed */}




//         </Swiper>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import ProjectModal from "../DetailPage/ProjectModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: "/HomePic2.jpg",
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Private Garden and Garage",
        "Modern Interiors",
        "Close to downtown Chicago",
      ],
    },
    {
      image: "/HomePic3.jpg",
      title: "Vista Verde",
      price: "$3,00,000",
      location: "San Francisco",
      details: [
        "4 Bedrooms, 3 Bathrooms",
        "Rooftop View",
        "Luxury Kitchen",
        "Near Bay Area",
      ],
    },
    {
      image: "/HomePic4.jpg",
      title: "Urban Nest",
      price: "$1,80,000",
      location: "Austin",
      details: [
        "2 Bedrooms, 1 Bathroom",
        "Compact Design",
        "Private Parking",
        "Eco-friendly Materials",
      ],
    },
    {
      image: "/HomePic5.jpg",
      title: "The White Villa",
      price: "$4,20,000",
      location: "Los Angeles",
      details: [
        "5 Bedrooms, 4 Bathrooms",
        "Pool & Garden",
        "Modern Architecture",
        "Near Downtown LA",
      ],
    },
    {
      image: "/HomePic6.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
    {
      image: "/HomePic7.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
    {
      image: "/HomePic8.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
    {
      image: "/HomePic9.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
    {
      image: "/HomePic10.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
    {
      image: "/HomePic1.jpg",
      title: "Palm Retreat",
      price: "$3,50,000",
      location: "Miami",
      details: [
        "3 Bedrooms, 2 Bathrooms",
        "Palm Trees & Patio",
        "Beach Side",
        "Open Layout",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Projects Completed
      </h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={true}
        modules={[Navigation]}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">
                  {project.price} | {project.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
