import homeImage from "../../assets/HomeImage.png";
export default function newsletterSection() {
  return (
    <>
      <div className="newsletterSection bg-gray-100">
        <div className="container mx-auto py-16 px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800">
              What Our Community Says
            </h1>
            <p className="text-gray-600 mt-3">
              Join thousands of families who trust Gerga Outlet for their daily
              nourishment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <div className="relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="absolute -top-4 left-6 bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                99
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                The quality of the ghee and cold-pressed oils is unmatched. My
                kitchen smells like a dream every time I cook!
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={homeImage}
                  alt="Sarah Jenkins"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">Sarah Jenkins</h2>
                  <span className="text-sm text-gray-500">Home Chef</span>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="absolute -top-4 left-6 bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                99
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                Fast delivery and the packaging is so sustainable. I love that I
                can get fresh lentils without the plastic waste.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={homeImage}
                  alt="Michael Chen"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">Michael Chen</h2>
                  <span className="text-sm text-gray-500">
                    Sustainability Advocate
                  </span>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="absolute -top-4 left-6 bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                99
              </div>

              <p className="text-gray-600 leading-7 mt-4">
                Gerga Outlet has become our go-to for all pantry staples. The
                organic selection is huge and prices are very fair.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={homeImage}
                  alt="Elena Rodriguez"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">
                    Elena Rodriguez
                  </h2>
                  <span className="text-sm text-gray-500">Nutritionist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
