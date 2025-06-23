export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="text-center ">
        <h1 className="text-2xl">
          <span className="font-bold"> Customer </span>
          <span className="underline decoration-1"> Testimonials</span>
        </h1>
        <p className="flex flex-col text-gray-500 text-sm">
          <span> Real Stories from Thse Who Found Home </span>
          <span> with Us</span>
        </p>
      </div>

      <div className="flex justify-center m-10  ">
        <div className="bg-white w-80 h-auto rounded-md shadow-2xl m-5 flex flex-col items-center border border-gray-100 p-4 text-center">
  <img
    src="/Monika.png"
    alt="Monika Pic"
    className="rounded-full w-24 h-24 mb-4 object-cover"
  />

  <h2 className="text-lg font-semibold">Monika Akshay Chahar</h2>
  <p className="text-sm text-gray-500 mb-2">Web Developer</p>

  <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>

  <p className="text-sm text-gray-600">
    From the very first meeting, they understood my vision and helped me
    find the perfect property. Their attention to detail and commitment
    to client satisfaction is unmatched.
  </p>
</div>


        <div className="bg-white w-80 h-auto  rounded-md shadow-2xl flex flex-col m-5  items-center border border-gray-100 p-4 text-center">
          <img
            src="/Monika2.png"
            alt=" Monika Pic"
            className=" rounded-full w-24 h-24 mb-4 object-cover"
          />
          <h2 className="text-lg font-semibold">Monika Akshay Chahar</h2>
          <p className="text-sm text-gray-500 mb-2">Web Developer</p>

          <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-sm text-gray-600">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>

        <div className="bg-white w-80 h-auto rounded-md shadow-2xl m-5 flex flex-col items-center border border-gray-100 p-4 text-center">
          <img
            src="/Monika3.png"
            alt="Monika Pic"
            className="rounded-full w-24 h-24 mb-4 object-cover"
          />

          <h2 className="text-lg font-semibold">Monika Akshay Chahar</h2>
          <p className="text-sm text-gray-500 mb-2">Web Developer</p>

          <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>

          <p className="text-sm text-gray-600">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>
    </div>
  );
}
