import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import imgReg from "../../assets/LogoReg.png";
import { Badge } from "@/components/ui/badge";
import { PiLeafFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function AuthLayout() {
  const location = useLocation();

  // 👇 نحدد الصفحة الحالية
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="relative w-full md:w-1/2">
          <img
            src={imgReg}
            alt="Gerga Outlet"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold pb-2">
              Gerga Outlet
            </h1>

            <p className="text-lg md:text-2xl pb-4">
              Fresh essentials for your kitchen
            </p>

            <div className="flex gap-3 flex-wrap justify-center">
              <Badge className="bg-[#4AE183] text-black px-3 py-2 flex items-center gap-1">
                <PiLeafFill size={14} />
                Fresh
              </Badge>

              <Badge className="bg-[#FFDF94] text-black px-3 py-2 flex items-center gap-1">
                <FaStar size={14} />
                Premium
              </Badge>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-end items-center gap-2 text-sm px-6 py-4">
            {isLogin && (
              <>
                <span className="text-[#947200]">Don’t have an account?</span>

                <Link to="/register">
                  <Button
                    variant="outline"
                    className="rounded-xl border-[#B38B00] text-[#B38B00] hover:bg-[#B38B00] hover:text-white"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

            {isRegister && (
              <>
                <span className="text-[#947200]">Already have an account?</span>

                <Link to="/login">
                  <Button
                    variant="outline"
                    className="rounded-xl border-[#B38B00] text-[#B38B00] hover:bg-[#B38B00] hover:text-white"
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center pb-12 px-4">
            <Outlet />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-around items-center p-6 bg-[#F0F1F2]">
        <div>
          <p className="font-bold pb-2">Gerga Outlet</p>
          <p className="text-gray-500">
            @2024 Gerga Outlet. The Radiant Pantry.
          </p>
        </div>

        <div className="flex justify-between gap-6 text-gray-500 items-center">
          <span>Privacy Policy</span>
          <span>Terms Of Service</span>
          <span>Shipping Info</span>
        </div>
      </div>
    </>
  );
}
