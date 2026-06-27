import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function fiveSection() {
  return (
    <>
      <div className="fiveSection container mx-auto h-[80vh] flex items-center">
        <div className="w-full bg-[#006D37] text-center flex justify-center items-center rounded-3xl h-2/3">
          <div className="w-full md:w-3/7">
            <h1 className="text-2xl text-white font-bold py-2">
              Stay Fresh with Our Updates
            </h1>
            <p>
              Subscribe to receive exclusive recipes, weekly deals, and health
              tips directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center pt-5 gap-3">
              <Input
                placeholder="Enter Your email"
                type="email"
                className="h-12 placeholder:text-gray-300 w-full sm:w-1/2 text-white bg-[#c9c4c43c]"
              />
              <Button className="bg-white hover:bg-amber-400 hover:text-gray-800 transition-all text-[#00A657] w-38 h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
