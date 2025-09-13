import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaCar, FaCheckCircle, FaStar, FaWhatsapp } from 'react-icons/fa';

// Sample sold car data
const soldCars = [
  {
    id: 1,
    name: 'BMW 3 Series',
    year: 2020,
    soldPrice: 32000,
    originalPrice: 35000,
    mileage: '25,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/images/bmw-3-series.jpg',
    soldDate: '2023-05-15',
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: 2,
    name: 'Mercedes-Benz GLC',
    year: 2019,
    soldPrice: 38000,
    originalPrice: 40000,
    mileage: '32,500',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: '/images/mercedes-glc.jpg',
    soldDate: '2023-04-22',
    rating: 4.9,
    reviewCount: 31,
  },
  {
    id: 3,
    name: 'Audi Q5',
    year: 2020,
    soldPrice: 36000,
    originalPrice: 38000,
    mileage: '28,700',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/images/audi-q5.jpg',
    soldDate: '2023-03-10',
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: 4,
    name: 'Toyota Camry',
    year: 2021,
    soldPrice: 28000,
    originalPrice: 30000,
    mileage: '18,500',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    image: '/images/toyota-camry.jpg',
    soldDate: '2023-06-05',
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 5,
    name: 'Honda CR-V',
    year: 2020,
    soldPrice: 29000,
    originalPrice: 31000,
    mileage: '22,300',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/images/honda-crv.jpg',
    soldDate: '2023-02-18',
    rating: 4.8,
    reviewCount: 27,
  },
  {
    id: 6,
    name: 'Ford Mustang',
    year: 2021,
    soldPrice: 42000,
    originalPrice: 45000,
    mileage: '12,500',
    transmission: 'Manual',
    fuel: 'Petrol',
    image: '/images/ford-mustang.jpg',
    soldDate: '2023-01-30',
    rating: 4.9,
    reviewCount: 15,
  },
  {
    id: 7,
    name: 'Tesla Model S',
    year: 2019,
    soldPrice: 65000,
    originalPrice: 70000,
    mileage: '18,200',
    transmission: 'Automatic',
    fuel: 'Electric',
    image: '/images/tesla-model-s.jpg',
    soldDate: '2023-07-12',
    rating: 4.9,
    reviewCount: 38,
  },
  {
    id: 8,
    name: 'Jeep Grand Cherokee',
    year: 2020,
    soldPrice: 38000,
    originalPrice: 40000,
    mileage: '27,800',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: '/images/jeep-grand-cherokee.jpg',
    soldDate: '2023-05-28',
    rating: 4.7,
    reviewCount: 22,
  },
];

export default function SoldCars() {
  const [visibleCars, setVisibleCars] = useState(8);
  const [sortBy, setSortBy] = useState('newest');

  const sortedCars = [...soldCars].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime();
    } else if (sortBy === 'highestPrice') {
      return b.soldPrice - a.soldPrice;
    } else if (sortBy === 'lowestPrice') {
      return a.soldPrice - b.soldPrice;
    } else if (sortBy === 'highestMileage') {
      return parseInt(b.mileage.replace(/,/g, '')) - parseInt(a.mileage.replace(/,/g, ''));
    } else {
      return parseInt(a.mileage.replace(/,/g, '')) - parseInt(b.mileage.replace(/,/g, ''));
    }
  });

  const loadMore = () => {
    setVisibleCars(prev => Math.min(prev + 4, soldCars.length));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sold Cars | PreOwned Cars</title>
        <meta name="description" content="Browse our recently sold vehicles. See what our customers have purchased and read their reviews." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/sold-cars-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recently Sold Vehicles</h1>
          <p className="text-xl text-gray-300">Browse our collection of recently sold vehicles and read customer reviews</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Sorting and Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Our Recently Sold Inventory</h2>
            <p className="text-gray-600">Showing {visibleCars} of {soldCars.length} vehicles</p>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="newest">Newest First</option>
              <option value="highestPrice">Highest Price</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestMileage">Highest Mileage</option>
              <option value="lowestMileage">Lowest Mileage</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-500 mb-2">{soldCars.length}+</div>
            <p className="text-gray-600">Vehicles Sold</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.8<span className="text-lg">/5.0</span></div>
            <div className="flex items-center mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600">Customer Rating</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-gray-600">Satisfaction Guarantee</p>
          </div>
        </div>

        {/* Sold Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedCars.slice(0, visibleCars).map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow relative">
              <div className="relative h-48">
                <Image 
                  src={car.image} 
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                  <FaCheckCircle className="mr-1" /> SOLD
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-sm">Sold for</div>
                  <div className="text-xl font-bold">${car.soldPrice.toLocaleString()}</div>
                  <div className="text-xs line-through">${car.originalPrice.toLocaleString()}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <div className="text-sm text-gray-500">{car.year}</div>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>{car.mileage} mi</div>
                    <div>{car.transmission}</div>
                    <div>{car.fuel}</div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{car.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({car.reviewCount})</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Sold on {formatDate(car.soldDate)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCars < soldCars.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Load More Vehicles
            </button>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John D.',
                rating: 5,
                comment: 'Exceptional service! Found my dream car at a great price. The team was very professional and made the whole process smooth.',
                date: '2023-06-15',
              },
              {
                name: 'Sarah M.',
                rating: 5,
                comment: 'Highly recommend! The car was exactly as described and the pricing was very fair. Will definitely buy from them again.',
                date: '2023-05-28',
              },
              {
                name: 'Michael T.',
                rating: 4,
                comment: 'Good experience overall. The car was in great condition and the staff was helpful. Would have given 5 stars if the financing process was a bit quicker.',
                date: '2023-04-10',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="text-sm text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for a Specific Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let us help you find your dream car. Contact us today!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+1234567890" 
              className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
