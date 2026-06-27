import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
export default function CardProduct({ product }) {
  let { title, price, thumbnail, description, rating, category } = product;
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <>
      <Card
        onClick={() => navigate("/productDetails", { state: product })}
        className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-full overflow-hidden rounded-xl group shadow-md pt-0"
      >
        <div className="bg-[#f5f2f2] m-3 h-40 sm:h-48 md:h-52 lg:h-56 flex items-center justify-center overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Content */}
        <div className="px-4 sm:px-5 pb-4 pt-3">
          {/* Rating */}
          <div className="flex gap-1 items-center pb-2 flex-wrap">
            <FaStar className="text-[#F5BF00] text-sm" />
            <FaStar className="text-[#F5BF00] text-sm" />
            <FaStar className="text-[#F5BF00] text-sm" />
            <FaStar className="text-[#F5BF00] text-sm" />
            <FaStar className="text-[#F5BF00] text-sm" />
            <span className="text-xs sm:text-sm text-gray-500 ml-1">
              ({rating})
            </span>
          </div>

          {/* Title */}
          <div className="pb-3">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold pb-1 line-clamp-1">
              {title}
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm pb-2">
              {description.split(" ").slice(0, 5).join(" ")}...
            </p>

            <span className="text-xl sm:text-2xl font-bold text-[#B38B00]">
              ${price}
            </span>
          </div>

          {/* Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-[#F5BF00] hover:bg-[#d9a800] text-black font-semibold h-10 sm:h-11 md:h-12 rounded-lg text-sm sm:text-base"
          >
            Add To Cart
          </Button>
        </div>
      </Card>
    </>
  );
}
