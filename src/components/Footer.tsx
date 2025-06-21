
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dyeton Paints</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of high-quality industrial coatings, powder coatings, and specialty paint solutions for diverse applications.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400" />
              <Twitter className="w-5 h-5 text-gray-400" />
              <Linkedin className="w-5 h-5 text-gray-400" />
              <Instagram className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Product Categories</h4>
            <ul className="space-y-2">
              <li><a href="/products/powder" className="text-gray-300 hover:text-white transition-colors text-sm">Powder Coating</a></li>
              <li><a href="/products/protective" className="text-gray-300 hover:text-white transition-colors text-sm">Protective Coating</a></li>
              <li><a href="/products/industrial" className="text-gray-300 hover:text-white transition-colors text-sm">Industrial Coating</a></li>
              <li><a href="/products/specialty" className="text-gray-300 hover:text-white transition-colors text-sm">Specialty Coatings</a></li>
              <li><a href="/products/traffic" className="text-gray-300 hover:text-white transition-colors text-sm">Traffic Solutions</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white">Dyeton Paints Industries</p>
                  <p>AO-93 SS GT ROAD INDUSTRIAL AREA</p>
                  <p>GHAZIABAD-201002</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:sales@dyetonpaints.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  sales@dyetonpaints.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+918587824167" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 8587824167
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 1991 Dyeton Paints Industries. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
