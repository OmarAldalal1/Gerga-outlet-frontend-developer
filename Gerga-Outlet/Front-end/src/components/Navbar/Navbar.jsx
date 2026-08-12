import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useNavigate } from "react-router-dom";
import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const { favorites } = useWishlist();
  const navStyle = ({ isActive }) =>
    `relative font-extrabold text-[18px] hover:text-[#D4A500]
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4A500]
  hover:after:w-full after:transition-all ${
    isActive ? "text-[#D4A500] after:w-full" : "text-gray-500"
  }`;

  return (
    <nav className="relative">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <span className="text-2xl font-bold text-[#D4A500]">Gerga Outlet</span>

        {/* NAV LINKS */}
        <div className="flex gap-5">
          <NavLink to="/home" className={navStyle}>
            Home
          </NavLink>
          <Link
            to="/home"
            className="relative font-extrabold text-[18px] text-gray-500 hover:text-[#D4A500]
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4A500]
  hover:after:w-full after:transition-all"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById("categories");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Categories
          </Link>
          <NavLink to="/best-seller" className={navStyle}>
            Best Seller
          </NavLink>
          <NavLink to="/deals" className={navStyle}>
            Deals
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 relative">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon className="stroke-green-900" />
            </InputGroupAddon>
          </InputGroup>

          {/* PROFILE / LOGIN */}
          {user ? (
            <div className="relative">
              {/* ICON WHEN LOGGED IN */}
              <button
                onClick={() => setOpen(!open)}
                className="text-3xl text-[#B38B00]"
              >
                <IoPersonCircle />
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-xl overflow-hidden z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    My Orders
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                      navigate("/login");
                    }}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              {/* ICON WHEN NOT LOGGED IN */}
              <IoPerson className="text-2xl text-gray-700 hover:text-[#B38B00]" />
            </Link>
          )}

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/favorites" className="relative">
            <FaHeart className="text-xl text-red-500" />

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
