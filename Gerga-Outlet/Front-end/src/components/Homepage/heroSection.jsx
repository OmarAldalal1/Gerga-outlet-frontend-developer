import { Badge } from "@/components/ui/badge";
import homeImage from "../../assets/HomeImage.png";
// import { SlBasketLoaded } from "react-icons/sl";

export default function heroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="relative ">
          <img
            src={homeImage}
            className="w-full object-cover h-screen "
            alt="homeImage"
          />
          <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-r from-white/90 to-transparent ps-7">
            <div className="absolute top-2/8 w-full md:w-3/5">
              <Badge className="bg-[#4AE183] px-4 py-2 text-green-950 mb-5">
                ORGANIC VITALITY
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold py-5">
                Fresh Essentials{" "}
                <span className="text-[#947200]">Delivered Fast</span>
              </h1>
              <p className="text-base md:text-[20px] text-gray-600 pb-3">
                Experience the radiant pantry. We source the finest oils, ghee,
                and harvest-fresh legumes directly from producers to your
                kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#f2bb05] text-[#947200] px-8 py-5 rounded-3xl hover:scale-105 transition-all ">
                  Shop Now
                </button>
                <button className="border-2 text-gray-600 px-8 py-5 bg-white rounded-3xl">
                  View Deals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
