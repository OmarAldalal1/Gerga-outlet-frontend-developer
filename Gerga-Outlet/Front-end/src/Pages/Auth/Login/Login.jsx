import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { CiMail } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data) => {
    if (loading) return;

    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      toast.error("Invalid email or password");
      setLoading(false);
      return;
    }

    login(user);

    toast.success("Login successful");

    setTimeout(() => {
      navigate("/home"); // 👈 صح
    }, 500);

    setLoading(false);
  };
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return (
    <div className="container mx-auto max-w-lg p-9 bg-white rounded-3xl shadow-2xl">
      <h1 className="text-3xl font-bold">Welcome Back</h1>

      <p className="text-[#8F9192] mt-2 mb-10">
        Sign in to continue shopping fresh essentials and premium household
        products
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm font-medium block mb-1.5">
            Email Address
          </label>

          <div className="relative">
            <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <Input
              type="email"
              placeholder="Email@example.com"
              className="pl-12 h-12 text-base"
              {...register("email")}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Password</label>

          <div className="relative">
            <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-12 h-12 text-base"
              />

              {showPassword ? (
                <FaEye
                  onClick={() => setshowPassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              ) : (
                <IoEyeOff
                  onClick={() => setshowPassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="remember"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />

            <label
              htmlFor="remember"
              className="text-sm cursor-pointer select-none"
            >
              Remember Me
            </label>
          </div>

          <a href="#" className="text-sm text-[#B38B00] hover:underline">
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full h-12 rounded-3xl bg-gradient-to-r from-[#F5BF00] to-[#B38B00] text-black font-medium hover:brightness-105 transition-all"
        >
          {loading ? "Signing in..." : "Sign In"}
          <GrLinkNext className="ml-2" />
        </Button>
      </form>
    </div>
  );
}
