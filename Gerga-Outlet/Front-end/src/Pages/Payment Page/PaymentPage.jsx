import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaTruckMoving } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineAccountBalanceWallet, MdWallet } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

export default function PaymentPage() {
  const location = useLocation();

  const cartItems = location.state?.cartItems || [];
  const singleProduct = location.state?.product || null;
  const quantity = location.state?.quantity || 1;

  const isCart = cartItems.length > 0;

  const items = isCart
    ? cartItems
    : singleProduct
      ? [{ ...singleProduct, quantity }]
      : [];

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const tax = subtotal * 0.07;
  const total = subtotal + tax + shipping;

  const [paymentMethod, setPaymentMethod] = useState("wallet");

  const activeStyle =
    "border-amber-500 bg-amber-50 shadow-md scale-[1.02] ring-2 ring-amber-300";
  const normalStyle =
    "border-gray-200 bg-white hover:border-amber-400 hover:shadow-md";

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        No Products Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      {/* HEADER */}
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl font-bold">Secure Checkout</h1>
        <p className="text-gray-500 mt-2">
          Review your order and complete payment
        </p>
      </div>

      {/* LAYOUT */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">
          {/* SHIPPING */}
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 mb-5">
              <FaTruckMoving className="text-2xl text-amber-500" />
              <h2 className="text-xl font-bold">Shipping Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-2xl bg-gray-100"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-2xl bg-gray-100"
              />
            </div>
            <Textarea
              placeholder="Delivery Address..."
              className="mt-4 min-h-[120px] rounded-2xl bg-gray-100"
            />
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 mb-5">
              <MdOutlineAccountBalanceWallet className="text-2xl text-green-700" />
              <h2 className="text-xl font-bold">Payment Methods</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod("wallet")}
                className={`border rounded-2xl p-4 ${
                  paymentMethod === "wallet" ? activeStyle : normalStyle
                }`}
              >
                <MdWallet className="mx-auto text-3xl text-amber-500 mb-2" />
                Wallet
              </button>
              <button
                onClick={() => setPaymentMethod("cash")}
                className={`border rounded-2xl p-4 ${
                  paymentMethod === "cash" ? activeStyle : normalStyle
                }`}
              >
                <BsCashCoin className="mx-auto text-3xl text-green-600 mb-2" />
                Cash
              </button>
              <button
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-2xl p-4 ${
                  paymentMethod === "card" ? activeStyle : normalStyle
                }`}
              >
                <FaCreditCard className="mx-auto text-3xl text-blue-600 mb-2" />
                Card
              </button>
            </div>

            <div className="mt-6">
              {paymentMethod === "wallet" && (
                <div className="space-y-3">
                  <input
                    className="w-full p-3 border rounded-2xl bg-gray-100"
                    placeholder="Wallet ID"
                  />
                  <input
                    type="password"
                    className="w-full p-3 border rounded-2xl bg-gray-100"
                    placeholder="PIN"
                  />
                </div>
              )}
              {paymentMethod === "cash" && (
                <input
                  className="w-full p-3 border rounded-2xl bg-gray-100"
                  placeholder="Delivery Notes"
                />
              )}
              {paymentMethod === "card" && (
                <div className="space-y-3">
                  <input
                    className="w-full p-3 border rounded-2xl bg-gray-100"
                    placeholder="Card Number"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className="p-3 border rounded-2xl bg-gray-100"
                      placeholder="MM/YY"
                    />
                    <input
                      type="password"
                      className="p-3 border rounded-2xl bg-gray-100"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-3xl shadow-md sticky top-6">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="space-y-4 border-b pb-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.thumbnail}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-gray-500 text-sm">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm">
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
            <button className="w-full mt-6 bg-amber-400 hover:bg-amber-500 py-3 rounded-2xl font-semibold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
