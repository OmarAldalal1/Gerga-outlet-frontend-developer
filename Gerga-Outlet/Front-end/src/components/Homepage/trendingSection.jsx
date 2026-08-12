import { useEffect, useState } from "react";
import axios from "axios";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { SlBasketLoaded } from "react-icons/sl";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function TrendingSection() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsPerView = 4;

  // API
  async function getProducts() {
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/groceries",
    );
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Next
  const next = () => {
    if (currentIndex < products.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Prev
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto py-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trending Essentials</h1>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-gray-200 hover:bg-[#D4A500] transition-all"
          >
            <GrFormPrevious className="text-blue-950 text-3xl" />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full bg-gray-200 hover:bg-[#D4A500] transition-all"
          >
            <GrFormNext className="text-blue-950 text-3xl" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden mt-14">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[25%] px-2">
              <Card
                onClick={() => navigate("/productDetails", { state: product })}
                className="relative group w-full p-3 overflow-hidden mt-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden bg-[#f5f2f2] rounded-xl">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="aspect-video w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <Badge className="bg-yellow-300 text-yellow-800">
                    Trending
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-base line-clamp-1">
                    {product.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                    {product.description.split(" ").slice(0, 6).join(" ")}...
                  </CardDescription>
                </CardHeader>

                {/* Footer */}
                <div className="flex px-3 justify-between items-center">
                  <span className="text-2xl font-bold text-[#765B00]">
                    ${product.price}
                  </span>

                  <button className="p-2 rounded-lg bg-gray-200 group-hover:bg-[#D4A500] transition-all">
                    <SlBasketLoaded className="text-blue-950 text-2xl" />
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
