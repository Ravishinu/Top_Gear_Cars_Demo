import { useState } from 'react';
import Head from 'next/head';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaCar, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

// Sample review data
const reviews = [
  {
    id: 1,
    name: 'John D.',
    rating: 5,
    date: '2023-08-15',
    car: '2020 BMW 3 Series',
    comment: 'Exceptional service! The team was very professional and made the whole process smooth. The car was in perfect condition, just as described. Would definitely recommend!',
    likes: 12,
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah M.',
    rating: 5,
    date: '2023-07-28',
    car: '2019 Mercedes-Benz GLC',
    comment: 'Highly recommend! The car was exactly as described and the pricing was very fair. The staff was knowledgeable and helpful throughout the entire process.',
    likes: 8,
    verified: true,
  },
  {
    id: 3,
    name: 'Michael T.',
    rating: 4,
    date: '2023-07-10',
    car: '2020 Audi Q5',
    comment: 'Good experience overall. The car was in great condition and the staff was helpful. Would have given 5 stars if the financing process was a bit quicker.',
    likes: 5,
    verified: true,
  },
  {
    id: 4,
    name: 'Emily R.',
    rating: 5,
    date: '2023-06-22',
    car: '2021 Toyota Camry Hybrid',
    comment: 'Absolutely love my new car! The team went above and beyond to find exactly what I was looking for. The whole process was transparent and stress-free.',
    likes: 15,
    verified: true,
  },
  {
    id: 5,
    name: 'David K.',
    rating: 5,
    date: '2023-06-15',
    car: '2020 Honda CR-V',
    comment: 'Great selection of vehicles and excellent customer service. The staff was very patient and answered all my questions. Very satisfied with my purchase!',
    likes: 9,
    verified: true,
  },
  {
    id: 6,
    name: 'Jennifer L.',
    rating: 4,
    date: '2023-05-30',
    car: '2021 Ford Mustang',
    comment: 'The car was in perfect condition and exactly as described. The only reason I\'m giving 4 stars is because the delivery took a bit longer than expected.',
    likes: 6,
    verified: true,
  },
];

// Calculate average rating
const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
const totalReviews = reviews.length;

// Rating distribution
const ratingDistribution = [5, 4, 3, 2, 1].map(star => ({
  stars: star,
  count: reviews.filter(r => Math.floor(r.rating) === star).length,
  percentage: (reviews.filter(r => Math.floor(r.rating) === star).length / reviews.length) * 100
}));

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Filter reviews based on rating
  const filteredReviews = reviews.filter(review => {
    if (activeFilter === 'all') return true;
    return Math.floor(review.rating) === parseInt(activeFilter);
  });

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Customer Reviews | PreOwned Cars</title>
        <meta name="description" content="Read what our customers say about their experience with PreOwned Cars. Real reviews from real customers." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/reviews-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-300">Hear what our customers have to say about their experience</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
              
              {/* Average Rating */}
              <div className="flex items-center mb-6">
                <div className="text-5xl font-bold text-gray-800 mr-4">{averageRating.toFixed(1)}</div>
                <div>
                  <div className="flex">
                    {renderStars(averageRating)}
                  </div>
                  <p className="text-gray-600 mt-1">Based on {totalReviews} reviews</p>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2 mb-6">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center">
                    <div className="w-10 text-gray-700">{item.stars} star</div>
                    <div className="flex-1 mx-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-8 text-right text-sm text-gray-600">{item.count}</div>
                  </div>
                ))}
              </div>

              {/* Filter Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeFilter === 'all' 
                      ? 'bg-orange-100 text-orange-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Reviews ({reviews.length})
                </button>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setActiveFilter(rating.toString())}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeFilter === rating.toString()
                        ? 'bg-orange-100 text-orange-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2">
                      ({reviews.filter(r => Math.floor(r.rating) === rating).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Leave Review CTA */}
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Your Experience</h3>
              <p className="text-gray-600 mb-4">We'd love to hear about your experience with us!</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:w-2/3">
            {/* Sort and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600">
                  Showing {currentReviews.length} of {filteredReviews.length} reviews
                </p>
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-600 mr-2 whitespace-nowrap">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                </select>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {currentReviews.length > 0 ? (
                currentReviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{review.name}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <FaCar className="mr-1" />
                              <span className="mr-3">{review.car}</span>
                              <FaCalendarAlt className="mr-1" />
                              <span>{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">
                        <FaUser className="mr-1" />
                        Verified Buyer
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.rating.toFixed(1)}</span>
                    </div>
                    
                    <div className="relative pl-4 border-l-2 border-orange-200 mb-4">
                      <FaQuoteLeft className="absolute -left-3 top-0 text-orange-300 text-2xl" />
                      <p className="text-gray-700 italic">{review.comment}</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <button className="flex items-center text-gray-500 hover:text-orange-500 mr-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        Helpful ({review.likes})
                      </button>
                      <button className="text-gray-500 hover:text-orange-500">
                        Report
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="text-5xl mb-4 text-gray-300">
                    <FaStar className="inline-block" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No reviews found</h3>
                  <p className="text-gray-600 mb-4">There are no reviews matching your current filters.</p>
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredReviews.length > reviewsPerPage && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-1">
                  {Array.from({ length: Math.ceil(filteredReviews.length / reviewsPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentPage === index + 1
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Browse our selection of quality preowned vehicles and experience the difference.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/available-cars" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View Inventory
            </a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> Chat with Us
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
};

export default Reviews;
