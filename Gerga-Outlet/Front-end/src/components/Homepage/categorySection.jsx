import firstCat from "../../assets/firstCat.png";
import secondCat from "../../assets/secondCat.png";
import thirdCat from "../../assets/ThirdCat.png";
import fourCat from "../../assets/FourCat.png";
import fiveCat from "../../assets/FiveCat.png";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <div id="categories" className=" categorySection px-8 py-15 bg-[#E1E3E4]">
      {/* Header */}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Shop by Category</h1>

        <div className="flex justify-between">
          <p className="text-gray-600">
            Everything you need for a wholesome kitchen
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[#B38B00]">View All</span>
            <GrLinkNext className="text-[#B38B00]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 md:grid-rows-6 gap-6 w-full h-auto md:h-[600px] mt-6">
        <Link
          to="/products?category=oil"
          className="block col-span-1 sm:col-span-2 md:col-span-4 md:row-span-6 relative overflow-hidden rounded-2xl group"
        >
          <img
            src={firstCat}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 group-hover:bg-black/20 transition-all duration-500"></div>

          <div className="absolute bottom-4 left-5 z-10">
            <p className="text-[#D4A500]">PREMIUM SELECTION</p>
            <h1 className="text-white text-3xl font-bold">
              Oils, Ghee & Butter
            </h1>
          </div>
        </Link>

        <Link
          to="/products?category=frozen"
          className="block col-span-1 md:col-span-3 md:row-span-3 relative overflow-hidden rounded-2xl group"
        >
          <img
            src={secondCat}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-3xl text-white font-bold">Frozen Foods</h1>
          </div>
        </Link>

        <Link
          to="/products?category=legumes"
          className="block col-span-1 md:col-span-3 md:row-span-3 relative overflow-hidden rounded-2xl group"
        >
          <img
            src={thirdCat}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-3xl text-white font-bold">Legumes</h1>
          </div>
        </Link>
        <Link
          to="/products?category=rice"
          className="block col-span-1 md:col-span-3 md:row-span-3 relative overflow-hidden rounded-2xl group"
        >
          <img
            src={fourCat}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-3xl text-white font-bold">Rice & Pasta</h1>
          </div>
        </Link>

        <Link
          to="/products?category=essentials"
          className="block col-span-1 md:col-span-3 md:row-span-3 relative overflow-hidden rounded-2xl group"
        >
          <img
            src={fiveCat}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-all duration-500"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h1 className="text-3xl text-white font-bold">Essentials</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
