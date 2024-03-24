// components/Gallery.tsx

import Image from 'next/image';

const Gallery = () => {
  // Sample image URLs
  const imageUrls = [
    '/assets/images/stargate1.jpg',
    '/assets/images/stargate2.jpg',
    '/assets/images/stargate3.jpg',
    '/assets/images/stargate4.jpg',
    '/assets/images/stargate6.jpg',
    '/assets/images/stargate5.jpg',
    '/assets/images/stargate7.jpg',
    '/assets/images/stargate8.jpg',
    '/assets/images/stargate9.jpg',
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
