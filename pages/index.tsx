import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaSearch, FaCar, FaStar, FaWhatsapp } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const CarCarousel = dynamic(() => import('../components/CarCarousel'), {
  ssr: false,
});

// Sample car data
const premiumCars = [
  {
    id: 1,
    name: 'BMW 5 Series',
    year: 2022,
    price: 45000,
    mileage: '15,000',
    transmission: 'Automatic',
    fuel: 'Diesel',
    image: '/images/bmw-5-series.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Mercedes-Benz C-Class',
    year: 2021,
    price: 42000,
    mileage: '12,500',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/images/mercedes-c-class.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Audi A6',
    year: 2022,
    price: 47000,
    mileage: '10,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/images/audi-a6.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Porsche 911',
    year: 2023,
    price: 120000,
    mileage: '5,000',
    transmission: 'PDK',
    fuel: 'Petrol',
    image: '/images/porsche-911.jpg',
    featured: true,
  },
];

const Home = () => {
  const [budget, setBudget] = useState(100000);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredCars = premiumCars.filter(car => car.price <= budget);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredCars.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredCars.length - 1 : prev - 1));
  };

  return (
    <>
      <Head>
        <title>Premium PreOwned Cars | Quality Used Vehicles</title>
        <meta name="description" content="Discover our collection of premium preowned cars. Best quality used vehicles with transparent pricing and history." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 z-10"></div>
          <div className="w-full h-full bg-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Find Your Dream PreOwned Car</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">Quality vehicles, transparent pricing, and exceptional service.</p>
        </div>
        
        <div className="w-full max-w-6xl mx-auto px-4 z-10 mb-12">
          <CarCarousel />
        </div>
        
        <div className="w-full max-w-2xl mx-auto px-4 z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4">What's your budget?</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>$10,000</span>
                <span>${new Intl.NumberFormat('en-US').format(budget)}</span>
                <span>$200,000</span>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                step="1000"
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center mx-auto">
              <FaSearch className="mr-2" /> Find Cars
            </button>
          </div>
        </div>
      </section>

      {/* Premium Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Collection</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image 
                      src={car.image} 
                      alt={car.name} 
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    {car.featured && (
                      <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{car.name}</h3>
                      <span className="text-2xl font-bold">${new Intl.NumberFormat('en-US').format(car.price)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <span className="mr-4">{car.year}</span>
                      <span className="mr-4">{car.mileage} mi</span>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-sm">4.8 (24 reviews)</span>
                      </div>
                      <a 
                        href="https://wa.me/1234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <FaCar className="mx-auto text-5xl text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">No cars found in this price range</h3>
                <p className="text-gray-500 mt-2">Try adjusting your budget or check back later for new arrivals.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Vehicles</h3>
              <p className="text-gray-600">Every car undergoes a 150-point inspection to ensure top condition.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no surprise costs or hidden charges.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">7-day money-back guarantee on all our vehicles.</p>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Home;
