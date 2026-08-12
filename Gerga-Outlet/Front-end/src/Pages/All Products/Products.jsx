import { Button } from "@/components/ui/button";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import axios from "axios";
import CardProduct from "../../components/Card/cardProduct";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Products() {
  const [allProduct, setallProduct] = useState([]);
  const [search, setSearch] = useState("");

  async function getProduct() {
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/groceries",
    );
    setallProduct(data.products);
  }

  useEffect(() => {
    getProduct();
  }, []);

  // 🔍 فلترة المنتجات حسب البحث
  const filteredProducts = allProduct.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 py-10">
      {/* Header */}
      <div className="container mx-auto px-4 pb-6 border-b">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Premium Cooking
        </h1>

        <p className="text-gray-500 w-full md:w-1/2 text-sm sm:text-base mt-2">
          Sourced from the finest organic orchards, our cold-pressed and
          artisanal oils bring the essence of nature's vitality to your kitchen.
        </p>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mt-8">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-1/2">
            <InputGroup className="py-5 bg-white border border-amber-100 rounded-lg w-full">
              <InputGroupInput
                placeholder="Search essentials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <InputGroupAddon>
                <SearchIcon className="stroke-green-900" />
              </InputGroupAddon>
            </InputGroup>

            <Button className="w-full sm:w-auto py-5 px-8 bg-white text-black border border-amber-100">
              Filter
            </Button>
          </div>

          {/* Sort */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
            <span className="text-sm sm:text-base">Sort By:</span>

            <Select>
              <SelectTrigger className="w-full sm:w-48 border-amber-200">
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Default</SelectLabel>
                  <SelectItem value="a">Option 1</SelectItem>
                  <SelectItem value="b">Option 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-12 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
