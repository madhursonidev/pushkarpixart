import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
        <p className="text-gray-700">{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
