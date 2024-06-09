import React, { useState, useEffect } from 'react';

// Import images from assets folder
import planeImage from '../assets/plane.jpg';
import karachiImage from '../assets/karachi.jpeg';
import flyImage from '../assets/plane3.jpg';
import flyinnImage from '../assets/flyinn.jpeg';

const images = [
  {
    src: planeImage,
    offer: 'Exclusive Offer: 20% off on Business Class!',
  },
  {
    src: karachiImage,
    offer: 'Flat 10% off on domestic flight tickets for Taaga Club Members',
  },
  {
    src: flyImage,
    offer: 'Exclusive Offer: 50% off on Business Class!',
  },
  {
    src: flyinnImage,
    offer: 'Exclusive Offer: 70% off on Business Class!',
  },
  // Add more images as needed
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleImageMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleImageMouseLeave = () => {
    // No need to change active index on mouse leave when images are changing automatically
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Exclusive Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ${
              activeIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onMouseEnter={() => handleImageMouseEnter(index)}
            onMouseLeave={handleImageMouseLeave}
          >
            <img
              src={image.src}
              alt={`Offer ${index + 1}`}
              className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-500 hover:scale-105"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg text-center p-4">{image.offer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
