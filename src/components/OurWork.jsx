import { photos } from "src/data/common";

const OurWork = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Our Work</h2>
        <div className="flex flex-wrap -mx-4">
          {photos.map((photo) => (
            <div key={photo.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                  <p className="text-gray-600">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
