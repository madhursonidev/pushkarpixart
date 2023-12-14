import { photos } from "src/data/common";
import PhotoCard from "src/components/PhotoCard";
import React from "react";

const GallerySection = () => {
  return (
    <div className="container mx-auto py-12 mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
