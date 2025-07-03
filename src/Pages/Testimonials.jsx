export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 mt-10">
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
        <div className="bg-white w-80 h-auto rounded-md shadow-2xl m-5 flex flex-col items-center border border-gray-100 p-4 text-center overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/human1.jpg"
            alt="Pic 1"
            className="rounded-full w-24 h-24 mb-4 object-cover"
          />

          <h2 className="text-lg font-semibold">Jon jecksion</h2>
          <p className="text-sm text-gray-500 mb-2">Web Developer</p>

          <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>

          <p className="text-sm text-gray-600">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>

        <div className="bg-white w-80 h-auto  rounded-md shadow-2xl flex flex-col m-5  items-center border border-gray-100 p-4 text-center overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/human2.jpg"
            alt="Pic2"
            className=" rounded-full w-24 h-24 mb-4 object-cover"
          />
          <h2 className="text-lg font-semibold">jhd ifhfuweef </h2>
          <p className="text-sm text-gray-500 mb-2">Web Developer</p>

          <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
          <p className="text-sm text-gray-600">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>

        <div className="bg-white w-80 h-auto rounded-md shadow-2xl m-5 flex flex-col items-center border border-gray-100 p-4 text-center overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src="/human3.jpg"
            alt="Pic3"
            className="rounded-full w-24 h-24 mb-4 object-cover"
          />

          <h2 className="text-lg font-semibold">djh kjddhfuie </h2>
          <p className="text-sm text-gray-500 mb-2">Web Developer</p>

          <div className="text-orange-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>

          <p className="text-sm text-gray-600">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>

      <section>
        <div className="text-center m-28 ">
          <h1 className="text-2xl">
            <span className="font-bold"> Contact </span>
            <span className="underline decoration-1"> With Us</span>
          </h1>
          <p className="flex flex-col text-gray-500 text-sm">
            <span> Ready to Make a Move ? Let's Build Your </span>
            <span> Future Together</span>
          </p>
        </div>
        <form className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row mb-5">
            <div className="flex flex-col pr-5">
              <label> Your Name</label>
              <input
                placeholder="Your Name"
                className=" border border-gray-300 h-8 w-64 px-3 py-2 text-sm rounded-md "
              />
            </div>
            <div className="flex flex-col">
              <label> Your Email</label>
              <input
                placeholder="Your Email"
                className="border border-gray-300 w-64 h-8 px-3 py-2 text-sm rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Massage</label>
            <textarea
              placeholder="Message"
              className="w-96 h-28 border border-black p-3 rounded-md resize-none"
            />
          </div>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 w-40 h-10 rounded-md text-white transition-all">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
