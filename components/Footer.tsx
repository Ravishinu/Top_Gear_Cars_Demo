import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">PreOwnedCars</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect pre-owned vehicle. Quality cars, transparent pricing, and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/available-cars" className="text-gray-400 hover:text-orange-400 transition-colors">Available Cars</Link></li>
              <li><Link href="/sold-cars" className="text-gray-400 hover:text-orange-400 transition-colors">Sold Cars</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-orange-400 transition-colors">Customer Reviews</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
                <span className="text-gray-400">123 Auto Street, Car City, 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-orange-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-400 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-400" />
                <a href="mailto:info@preownedcars.com" className="text-gray-400 hover:text-orange-400 transition-colors">info@preownedcars.com</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-orange-400" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new arrivals and special offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                required
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PreOwnedCars. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
