import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { FaRegUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

import { UserSchema } from "@/lib/ValidationSchema";
import { useState } from "react";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(true);
  const [showRePassword, setshowRePassword] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(UserSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
      terms: false,
    },
  });

  // ===== LocalStorage Helpers =====
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const onSubmit = (data) => {
    setIsLoading(true);

    try {
      const users = getUsers();

      // check duplicate email
      const exists = users.find((u) => u.email === data.email);
      if (exists) {
        toast.error("Email already exists");
        setIsLoading(false);
        return;
      }

      // save user
      saveUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password, // (for demo only)
      });

      toast.success("Account created successfully!");
      reset();

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-lg p-8 bg-white rounded-3xl shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Join The Pantry</h1>

      <p className="text-[#8F9192] text-center mt-2 mb-10">
        Create your account to start shopping premium culinary essentials.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label className="text-sm font-medium block mb-1.5">Full Name</label>

          <div className="relative">
            <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              {...register("name")}
              placeholder="Enter your full name"
              className="pl-12 h-12 text-base"
            />
          </div>

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block mb-1.5">
              Email Address
            </label>

            <div className="relative">
              <CiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <Input
                {...register("email")}
                type="email"
                placeholder="Email@example.com"
                className="pl-12 h-12 text-base"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium block mb-1.5">Phone</label>

            <div className="relative">
              <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <Input
                {...register("phone")}
                placeholder="01123456789"
                className="pl-12 h-12 text-base"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium block mb-1.5">Password</label>

          <div className="relative">
            <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <div className="relative">
              <Input
                {...register("password")}
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                className="pl-12 h-12 text-base"
              />

              {showPassword ? (
                <IoEyeOff
                  onClick={() => setshowPassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => setshowPassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm font-medium block mb-1.5">
            Confirm Password
          </label>

          <div className="relative">
            <IoShieldOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <div className="relative">
              <Input
                {...register("repassword")}
                type={showRePassword ? "password" : "text"}
                placeholder="Password"
                className="pl-12 h-12 text-base"
              />

              {showRePassword ? (
                <IoEyeOff
                  onClick={() => setshowRePassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => setshowRePassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>

          {errors.repassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.repassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mt-1"
              />
            )}
          />

          <label className="text-sm">
            I agree to Terms of Service & Privacy Policy
          </label>
        </div>

        {errors.terms && (
          <p className="text-red-500 text-sm -mt-3">{errors.terms.message}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 rounded-3xl bg-gradient-to-r from-[#F5BF00] to-[#B38B00] text-black font-medium"
        >
          {isLoading ? "Creating Account..." : "Register Account"}
          {!isLoading && <GrLinkNext className="ml-2" />}
        </Button>
      </form>
    </div>
  );
}
