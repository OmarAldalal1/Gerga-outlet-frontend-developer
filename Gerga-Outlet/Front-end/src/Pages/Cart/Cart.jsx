import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import TrendingSection from "@/Components/Homepage/trendingSection";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increase, decrease, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const tax = subtotal * 0.07;
  const total = subtotal + tax + shipping;
  function handleBuyNow() {
    console.log("Button Clicked!"); // 1. هل دي بتظهر؟

    if (cart.length === 0) {
      alert("السلّة فارغة!");
      return;
    }

    console.log("Navigating with items:", cart); // 2. هل البيانات موجودة؟

    // استخدم المسار المطلق
    navigate("/payment", {
      state: { cartItems: [...cart] },
    });
  }

  return (
    <>
      <div className="bg-gray-50 py-5 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-5">Your Radiant Basket</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* CART ITEMS */}
            <div className="lg:col-span-8 rounded-3xl p-2 space-y-5">
              {cart.length === 0 ? (
                <div className="bg-white p-10 rounded-3xl text-center text-gray-500">
                  Your cart is empty 🛒
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-3xl"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rounded-3xl w-full md:w-40 h-40 object-contain"
                    />
                    <div className="flex-1">
                      <h1 className="text-xl font-bold">{item.title}</h1>
                      <p className="text-gray-500 mt-1">
                        {item.category} • Organic Quality
                      </p>
                      <div className="flex items-center gap-4 mt-5 bg-gray-100 rounded-3xl px-3 py-2 w-fit">
                        <button onClick={() => decrease(item.id)}>
                          <FaMinus />
                        </button>
                        <span className="font-bold text-lg px-3">
                          {item.quantity}
                        </span>
                        <button onClick={() => increase(item.id)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <div className="flex md:flex-col justify-between items-end gap-4">
                      <h1 className="text-3xl font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </h1>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 flex items-center gap-2"
                      >
                        <FaTrashAlt />
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* SUMMARY */}
            <div className="lg:col-span-4">
              <div className="bg-white shadow-2xl rounded-3xl p-7 sticky top-5">
                <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  disabled={cart.length === 0}
                  className="w-full mt-6 bg-amber-400 py-3 rounded-2xl cursor-pointer disabled:opacity-50 font-medium"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingSection />
    </>
  );
}
