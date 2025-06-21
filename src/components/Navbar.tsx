import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut, easeInOut } from 'framer-motion';
import { ChevronDown, Menu, X, Layers, Sparkles, Home, Users, Mail, Paintbrush, Shield, Factory, ArrowRight, Star, Car } from 'lucide-react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { 
      name: 'Powder Coating', 
      path: '/products/powder',
      description: 'Eco-friendly & durable finishes',
      banner: '/assets/powder-coating-banner.jpg'
    },
    { 
      name: 'Protective Coating', 
      path: '/products/protective',
      description: 'Advanced corrosion protection',
      banner: '/assets/protective-coating.jpg'
    },
    { 
      name: 'General Industrial Coating', 
      path: '/products/industrial',
      description: 'Heavy-duty industrial solutions',
      banner: '/assets/GI-coatings.jpg'
    },
    { 
      name: 'Specialty Coatings', 
      path: '/products/specialty',
      description: 'Advanced specialized applications',
      banner: '/assets/specialty- banner.jpg'
    },
    { 
      name: 'Traffic Solutions', 
      path: '/products/traffic',
      description: 'Road marking & safety coatings',
      banner: '/assets/traffic-bn.jpg'
    }
  ];

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 0.5,
        ease: easeInOut
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.3,
        ease: easeOut,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const mobileNavLinks = [
      { name: 'Home', path: '/', icon: <Home className="h-5 w-5 mr-3 text-gray-500" /> },
      { name: 'About Us', path: '/about', icon: <Users className="h-5 w-5 mr-3 text-gray-500" /> }
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl shadow-lg flex items-center justify-center w-14 h-14 relative overflow-hidden">
                <img src="/assets/app-icon.png" alt="Dyeton Paints Logo" className="w-full h-full object-contain bg-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Dyeton Paints
              </span>
              <motion.div
                className="flex items-center space-x-1 opacity-60"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* <Sparkles className="h-3 w-3 text-blue-500" /> */}
                <span className="text-xs text-gray-600 font-medium">Coatings That Power Industrial Excellence</span>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${
                  location.pathname === item.path ? 'text-blue-600' : ''
                }`}>
                  {item.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: location.pathname === item.path ? '100%' : 0 
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group">
                <span>Categories</span>
                <motion.div
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <ChevronDown className="h-4 w-4 group-hover:text-blue-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                    style={{ perspective: '1000px' }}
                  >
                    <div className="p-3">
                      {productCategories.map((category) => (
                        <motion.div
                          key={category.path}
                          variants={itemVariants}
                        >
                          <Link
                            to={category.path}
                            className="group block p-5 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100 relative overflow-hidden mb-2"
                          >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                              <img src={category.banner} alt={category.name} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/50" />
                            </div>
                            <div className="relative z-10">
                              <h3 className="font-bold text-white group-hover:text-blue-200 transition-colors duration-200 text-lg mb-1">
                                {category.name}
                              </h3>
                              <p className="text-sm text-gray-200 group-hover:text-gray-100 leading-relaxed">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/contact" 
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Mail className="h-4 w-4 mr-2" />
                <span>Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-xl"
            >
              <motion.div 
                className="flex flex-col space-y-1"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {mobileNavLinks.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link 
                      to={item.path}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium block py-3 px-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants} className="pt-2">
                  <span className="text-gray-900 font-medium block py-2 px-2">Categories</span>
                  <div className="flex flex-col space-y-1 pl-4">
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="flex items-center py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                         <div className="w-8 h-6 mr-3 flex-shrink-0 rounded overflow-hidden">
                           <img src={category.banner} alt={category.name} className="w-full h-full object-cover" />
                         </div>
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="pt-2">
                  <Link 
                    to="/contact"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium block py-3 px-2 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <span>Contact Us</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
