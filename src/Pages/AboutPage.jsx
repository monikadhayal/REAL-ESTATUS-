export default function AboutPage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white mt-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/AboutPage.jpg"
          alt="About Image"
          className="rounded-tl-[150px] w-1/2 object-cover"
        />
      </div>

     
      <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-black">About</span>{" "}
          <span className="text-gray-500 underline">Our Brand</span>
        </h2>

        <p className="text-gray-600 mb-6">
          Passionate About Properties, Dedicated to Your Vision
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold text-black">10+</h3>
            <p className="text-gray-600 text-sm">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">12+</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">20+</h3>
            <p className="text-gray-600 text-sm">Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">25+</h3>
            <p className="text-gray-600 text-sm">Ongoing Projects</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>

        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-all duration-300">
          Learn more
        </button>
      </div>
    </section>
  );
}
