import { Badge } from "@/components/ui/badge";
import { FaStar, FaMinus, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import TrendingSection from "@/components/Homepage/trendingSection";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductDetails() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  const [Quantity, setQuantity] = useState(1);

  const { addToWishlist, isFavorite } = useWishlist();
  const { addToCart } = useCart();

  function plus() {
    setQuantity((prev) => prev + 1);
  }

  function minus() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  if (!product) {
    return <p className="text-center mt-10">No product selected</p>;
  }

  const { title, price, thumbnail, description, rating, category } = product;

  function handleAddToCart() {
    for (let i = 0; i < Quantity; i++) {
      addToCart(product);
    }
  }

  function handleBuyNow() {
    if (!product) return;

    navigate("/payment", {
      state: {
        product,
        quantity: Quantity,
      },
    });
  }

  return (
    <>
      <div className="FirstSection container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-start border-t-2 pt-6 gap-8 lg:gap-10">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 bg-gray-300 rounded-4xl">
            <img
              src={thumbnail}
              className="rounded-3xl w-full object-cover"
              alt={title}
            />
          </div>

          {/* DETAILS */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#4AE183]">Farm Fresh</Badge>
              <Badge className="bg-red-100 text-red-700">Save 20%</Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold mt-3">{title}</h1>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Badge className="bg-red-100 text-red-700 flex items-center gap-1">
                <FaStar />
                {rating}
              </Badge>

              <p className="text-sm text-gray-500">(128 Reviews)</p>

              <span className="text-sm text-gray-600">{category}</span>
            </div>

            {/* PRICE + QUANTITY */}
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl sm:text-5xl font-bold pb-3">${price}</h1>

              <span className="text-lg sm:text-2xl text-red-800">Quantity</span>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-5">
                {/* Quantity Box */}
                <div className="flex justify-between items-center w-full sm:w-1/3 bg-amber-200 rounded-3xl px-3 py-2">
                  <button
                    onClick={minus}
                    className="bg-white p-2 rounded-full hover:scale-110 hover:shadow-md transition-all duration-200"
                  >
                    <FaMinus />
                  </button>

                  <span className="font-bold">{Quantity}</span>

                  <button
                    onClick={plus}
                    className="bg-white p-2 rounded-full hover:scale-110 hover:shadow-md transition-all duration-200"
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-1/2 bg-amber-400 py-3 rounded-3xl hover:bg-amber-500 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-1/2 bg-black text-white py-3 rounded-3xl hover:bg-gray-900 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => addToWishlist(product)}
                  className="w-full sm:w-auto bg-white border-2 rounded-3xl hover:bg-red-100 hover:scale-110 hover:shadow-md transition-all duration-300 p-4 flex justify-center"
                >
                  {isFavorite(product.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <TrendingSection />
      </div>
    </>
  );
}
