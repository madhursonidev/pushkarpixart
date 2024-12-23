import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = ["All", "Nature", "Urban", "Portrait", "Abstract"];
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1732201715630-dabf1f0143d1?w=600&q=75",
    categories: ["Nature"],
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544715299-be6aa4573478?w=600&q=75",
    categories: ["Nature"],
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?w=600&q=75",
    categories: ["Nature"],
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1486671736870-2f695ecdf813?w=600&q=75",
    categories: ["Urban"],
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559406041-c7d2b2e98690?w=600&q=75",
    categories: ["Urban"],
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1513171920216-2640b288471b?w=600&q=75",
    categories: ["Urban"],
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1568707043650-eb03f2536825?w=600&q=75",
    categories: ["Portrait"],
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1712218908010-e5d025412b5e?w=600&q=75",
    categories: ["Portrait"],
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1676732331165-61bd1e55494a?w=600&q=75",
    categories: ["Portrait"],
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=75",
    categories: ["Abstract"],
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&q=75",
    categories: ["Abstract"],
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=600&q=75",
    categories: ["Abstract"],
  },
];

const Gallery = ({ navigation }) => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredImages =
    currentCategory === "All"
      ? images
      : images.filter((image) => image.categories.includes(currentCategory));

  return (
    <div className="relative">
      {navigation ? (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentCategory === category
                    ? "bg-white text-black"
                    : "hover:bg-white hover:bg-opacity-20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </nav>
      ) : null}

      <main className="pt-20 pb-32 container mx-auto">
        <div className="grid_ grid-cols-1_ md:grid-cols-2_ lg:grid-cols-3_ columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
          {filteredImages.map(({ src }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square_ mb-4 overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={600}
                height={600}
                className="object-cover transition-transform duration-500 group-hover:scale-110 w-full"
              />
              <Link
                href="/gallery"
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <p className="text-white text-lg font-semibold">View Project</p>
              </Link>
            </motion.div>
          ))}
        </div>
        {navigation ? null : (
          <div className="pt-20 flex justify-center">
            <Link href="/gallery">
              <button className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-800 transition duration-300 ease-out bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 hover:text-gray-600 group">
                <span className="relative z-10">View All</span>
                <span className="absolute inset-0 w-full h-full bg-gray-300 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-20 rounded-lg"></span>
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
