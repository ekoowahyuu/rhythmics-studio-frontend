import { useState } from "react";
import { Link } from "react-router-dom"; // Changed to react-router-dom Link
import emerald from "../assets/emerald.jpg"; // Example image import
import { ChevronDown, Star, Facebook, Instagram, Twitter } from "lucide-react";

export default function SportStudio() {
  // State to manage dropdown visibility
  const [isFacilityOpen, setIsFacilityOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  // State to manage selected values for dropdowns
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const [showPriceRange, setShowPriceRange] = useState(false);
  const [lowestPrice, setLowestPrice] = useState(""); // Input Lowest Price
  const [highestPrice, setHighestPrice] = useState(""); // Input Highest Price

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#AB886D] text-white px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Studio</h1>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Bandung
            </button>
            <button className="bg-primary2 text-black px-4 py-2 rounded-md">
              Jakarta
            </button>
            <button className="bg-primary2 text-black px-4 py-2 rounded-md">
              Bali
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 flex-wrap">
          {/* Facility Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFacilityOpen(!isFacilityOpen)}
              className="bg-primary2 px-4 py-2 rounded-md flex items-center gap-2"
            >
              Type
              <ChevronDown size={20} />
            </button>
            {isFacilityOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-48 z-50"
                onMouseLeave={() => setIsFacilityOpen(false)}
              >
                {["Regular", "VIP", "VVIP"].map((facility) => (
                  <div
                    key={facility}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedFacility(facility);
                      setIsFacilityOpen(false);
                    }}
                  >
                    {facility}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRatingOpen(!isRatingOpen)}
              className="bg-primary2 px-4 py-2 rounded-md flex items-center gap-2"
            >
              Rating
              <ChevronDown size={20} />
            </button>
            {isRatingOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-48 z-50"
                onMouseLeave={() => setIsRatingOpen(false)}
              >
                {["Lowest to Highest", "Highest to Lowest"].map((rating) => (
                  <div
                    key={rating}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedRating(rating);
                      setIsRatingOpen(false);
                    }}
                  >
                    {rating}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="bg-primary2 px-4 py-2 rounded-md flex items-center gap-2"
            >
              {selectedPrice || "Price"}
              <ChevronDown size={20} />
            </button>
            {isPriceOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-48 z-50"
                onMouseLeave={() => setIsPriceOpen(false)}
              >
                {["Lowest to Highest", "Highest to Lowest", "Price Range"].map(
                  (price) => (
                    <div
                      key={price}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedPrice(price);
                        setIsPriceOpen(false); // Tutup dropdown setelah memilih
                        if (price === "Price Range") {
                          setShowPriceRange(true); // Tampilkan input Price Range
                        } else {
                          setShowPriceRange(false); // Sembunyikan input Price Range
                        }
                      }}
                    >
                      {price}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Price Range Input */}
      {showPriceRange && (
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <h4 className="flex justify-center font-semibold mb-5">
            Set Price Range
          </h4>
          <div className="flex justify-center gap-3 items-center">
            <input
              type="number"
              placeholder="Lowest Price"
              value={lowestPrice}
              onChange={(e) => setLowestPrice(e.target.value)}
              className="w-40 h-9 border border-gray-300 rounded-md px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <span className="text-gray-500">—</span>
            <input
              type="number"
              placeholder="Highest Price"
              value={highestPrice}
              onChange={(e) => setHighestPrice(e.target.value)}
              className="w-40 h-9 border border-gray-300 rounded-md px-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => {
                alert(`Price Range: ${lowestPrice} - ${highestPrice}`);
                setIsPriceOpen(false);
              }}
              className="bg-[#6B7FFF] text-white px-20 py-2 rounded-md text-sm hover:bg-[#5a6edb] transition duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Venue Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={
                  i === 0 ? emerald : "/placeholder.svg?height=200&width=400"
                }
                alt="Venue"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">
                  {i === 0 ? "Rhythmics Emerald" : "Rhythmics Cullinan"}
                </h3>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Jl. Kemang Raya No. 88, Kemang, Jakarta Selatan, Jakarta
              </p>
              <div className="flex gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                  VIP
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                  VVIP
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 py-8">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="w-8 h-8 rounded-full bg-[#AB886D] text-white flex items-center justify-center"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
