import { IoEarth } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className=" text-black  mt-4 w-full border-2 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div>
            <h1 className="text-2xl font-bold text-[#D4A500] mb-4">
              Gerga Outlet
            </h1>
            <p className="text-gray-400  leading-7 text-sm">
              Your radiant pantry for premium essentials. We believe in the
              power of fresh, high-quality ingredients to transform every meal.
            </p>
            <div className="flex items-center gap-6 pt-5">
              <div className="p-3 bg-white rounded-full hover:bg-[#D4A500] transition-all group shadow-lg">
                <IoEarth className="text-blue-950 group-hover:text-white" />
              </div>

              <div className="p-3 bg-white rounded-full hover:bg-[#D4A500] transition-all group shadow-lg">
                <FaStar className="text-blue-950 group-hover:text-white" />
              </div>

              <div className="p-3 bg-white rounded-full hover:bg-[#D4A500] transition-all group shadow-lg">
                <FaHeart className="text-blue-950 group-hover:text-white" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Explore</h1>
            <div className="flex flex-col gap-3 text-gray-400  text-sm">
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                About Us
              </span>
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                Fresh Harvest
              </span>
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                Sustainability
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Support</h1>
            <div className="flex flex-col gap-3 text-gray-400  text-sm">
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                Privacy Policy
              </span>
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                Track Order
              </span>
              <span className="hover:text-[#D4A500] cursor-pointer transition-all">
                Contact Us
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Contact</h1>
            <div className="flex flex-col gap-3 text-gray-400  text-sm">
              <span>123 Harvest Ave, Green Valley</span>
              <span>+1 (234) 567-890</span>
              <span>hello@gergaoutlet.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-5 text-sm text-gray-400">
        © 2026 Gerga Outlet. All rights reserved.
      </div>
    </footer>
  );
}
