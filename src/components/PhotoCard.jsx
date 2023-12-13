import React from "react";

const PhotoCard = ({ photo }) => {
  const placeholderImage =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderImage;
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
        <p className="text-gray-700">{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
