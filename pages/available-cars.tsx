import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaFilter, FaCar, FaGasPump, FaTachometerAlt, FaCarSide, FaCalendarAlt, FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

// Sample car data
const allCars = [
  {
    id: 1,
    name: 'BMW 5 Series',
    year: 2022,
    price: 45000,
    mileage: '15,000',
    transmission: 'Automatic',
    fuel: 'Diesel',
    bodyType: 'Sedan',
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
    bodyType: 'Sedan',
    image: '/images/mercedes-c-class.jpg',
  },
  {
    id: 3,
    name: 'Audi A6',
    year: 2022,
    price: 47000,
    mileage: '10,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    image: '/images/audi-a6.jpg',
  },
  {
    id: 4,
    name: 'Toyota RAV4',
    year: 2021,
    price: 32000,
    mileage: '18,000',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    bodyType: 'SUV',
    image: '/images/toyota-rav4.jpg',
  },
  {
    id: 5,
    name: 'Honda Civic',
    year: 2022,
    price: 28000,
    mileage: '8,500',
    transmission: 'Automatic',
    fuel: 'Petrol',
    bodyType: 'Hatchback',
    image: '/images/honda-civic.jpg',
  },
  {
    id: 6,
    name: 'Ford F-150',
    year: 2021,
    price: 38000,
    mileage: '22,000',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    bodyType: 'Truck',
    image: '/images/ford-f150.jpg',
  },
  {
    id: 7,
    name: 'Tesla Model 3',
    year: 2023,
    price: 52000,
    mileage: '5,000',
    transmission: 'Automatic',
    fuel: 'Electric',
    bodyType: 'Sedan',
    image: '/images/tesla-model3.jpg',
  },
  {
    id: 8,
    name: 'Jeep Wrangler',
    year: 2022,
    price: 45000,
    mileage: '12,300',
    transmission: 'Manual',
    fuel: 'Petrol',
    bodyType: 'SUV',
    image: '/images/jeep-wrangler.jpg',
  },
];

// Available filters
const bodyTypes = ['All', 'Sedan', 'SUV', 'Hatchback', 'Truck'];
const transmissions = ['All', 'Automatic', 'Manual'];
const fuelTypes = ['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric', 'Gasoline'];

export default function AvailableCars() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 200000,
    bodyType: 'All',
    transmission: 'All',
    fuelType: 'All',
    searchQuery: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = allCars.filter((car) => {
    // Price filter
    if (car.price < filters.minPrice || car.price > filters.maxPrice) return false;
    
    // Body type filter
    if (filters.bodyType !== 'All' && car.bodyType !== filters.bodyType) return false;
    
    // Transmission filter
    if (filters.transmission !== 'All' && car.transmission !== filters.transmission) return false;
    
    // Fuel type filter
    if (filters.fuelType !== 'All' && car.fuel !== filters.fuelType) return false;
    
    // Search query filter
    if (
      filters.searchQuery &&
      !car.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
      return false;
    
    return true;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: name === 'minPrice' || name === 'maxPrice' ? parseInt(value) : value,
    });
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 200000,
      bodyType: 'All',
      transmission: 'All',
      fuelType: 'All',
      searchQuery: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Available Cars | PreOwned Cars</title>
        <meta name="description" content="Browse our wide selection of quality preowned cars. Find your perfect vehicle today." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Available Cars</h1>
          <p className="text-xl text-gray-300">Find your perfect preowned vehicle from our extensive collection</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold mb-4 md:mb-0">Search Inventory</h2>
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              <FaFilter className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Min"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Type
                  </label>
                  <select
                    name="bodyType"
                    value={filters.bodyType}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {bodyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {transmissions.map((trans) => (
                      <option key={trans} value={trans}>
                        {trans}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Type
                  </label>
                  <select
                    name="fuelType"
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {fuelTypes.map((fuel) => (
                      <option key={fuel} value={fuel}>
                        {fuel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 mr-3 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredCars.length}</span> {filteredCars.length === 1 ? 'vehicle' : 'vehicles'}
          </p>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Mileage: Low to High</option>
            </select>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
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
                    <span className="text-orange-500 font-bold">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-orange-500" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center">
                        <FaTachometerAlt className="mr-2 text-orange-500" />
                        <span>{car.mileage} mi</span>
                      </div>
                      <div className="flex items-center">
                        <FaExchangeAlt className="mr-2 text-orange-500" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <FaGasPump className="mr-2 text-orange-500" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <a 
                      href={`/car-details/${car.id}`}
                      className="text-orange-500 hover:underline text-sm font-medium"
                    >
                      View Details
                    </a>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <FaCar className="mx-auto text-5xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">No cars match your search criteria</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredCars.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100">
                Previous
              </button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded-md">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                10
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        )}
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
