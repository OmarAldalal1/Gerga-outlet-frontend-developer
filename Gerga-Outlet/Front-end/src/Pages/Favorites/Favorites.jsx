import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import CardProduct from "@/components/Card/cardProduct";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#B38B00]">My Wishlist ❤️</h1>

      {favorites.length === 0 ? (
        <div className="text-center mt-24">
          <FaHeart className="mx-auto text-7xl text-gray-200 mb-5" />

          <h2 className="text-3xl font-bold">Your Wishlist is Empty</h2>

          <p className="text-gray-500 mt-3">
            Start saving products you love ❤️
          </p>

          <Link
            to="/home"
            className="inline-block mt-5 bg-[#B38B00] text-white px-6 py-2 rounded-lg"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-6">
          {favorites.map((product) => {
            const productId = product.id || product._id;

            return (
              <div
                key={productId}
                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 relative group"
              >
                {/* زر الحذف */}
                <button
                  onClick={() => removeFromWishlist(productId)}
                  className="absolute top-3 right-3 z-50 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <FaTrashAlt />
                </button>

                <CardProduct product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
