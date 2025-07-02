import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 mt-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-black">Projects</span>{" "}
          <span className="underline decoration-1">Completed</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </div>

      {/* Swiper Section */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic1.jpg"
                alt="House"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic2.jpg"
                alt="HomePic2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Serenity Suites
                </h3>
                <p className="text-sm text-gray-600">$2,50,000 | Chicago</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic3.jpg"
                alt="HomePic3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Central Square
                </h3>
                <p className="text-sm text-gray-600">$2,50,000 | Los Angeles</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic4.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic5.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic6.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic7.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic8.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic9.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="w-full overflow-hidden shadow-lg bg-white rounded-xl">
              <img
                src="/HomePic10.jpg"
                alt="HomePic4"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-gray-800">
                  Vista Verde
                </h3>
                <p className="text-sm text-gray-600">
                  $2,50,000 | San Francisco
                </p>
              </div>
            </div>


          </SwiperSlide>

          {/* Add more slides below if needed */}




        </Swiper>
      </div>
    </div>
  );
}

