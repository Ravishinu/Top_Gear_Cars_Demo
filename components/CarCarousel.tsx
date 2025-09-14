import { useEffect, useState } from 'react';
import Image from 'next/image';

const carImages = [
  {
    src: '/images/car1.jpg',
    alt: 'Luxury Sedan',
    title: 'Premium Sedan Collection'
  },
  {
    src: '/images/car2.jpg',
    alt: 'Sports Car',
    title: 'High-Performance Sports Cars'
  },
  {
    src: '/images/car3.jpg',
    alt: 'SUV',
    title: 'Luxury SUVs'
  },
  {
    src: '/images/car4.jpg',
    alt: 'Convertible',
    title: 'Elegant Convertibles'
  }
];

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 overflow-hidden mb-12">
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-110"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-blue-300 font-medium">Explore Collection →</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarCarousel;
