import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Palette, Factory, CheckCircle, Sparkles, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const
    }
  };

  const services = [
    {
      title: "Powder Coating",
      description: "Durable, eco-friendly coating solutions with superior finish quality and longevity.",
      imageUrl: "/assets/powder-coating.jpg",
      href: "/products/powder"
    },
    {
      title: "Protective Coating",
      description: "Advanced corrosion resistance and weatherproofing for harsh environmental conditions.",
      imageUrl: "/assets/protective-coating.jpg",
      href: "/products/protective"
    },
    {
      title: "Industrial Coating",
      description: "Heavy-duty coating systems designed for industrial applications and machinery.",
      imageUrl: "/assets/industrial-coating.jpg",
      href: "/products/industrial"
    }
  ];

  const benefits = [
    "35+ Years of Industry Experience",
    "ISO 9001 Certified Quality Standards",
    "Environmentally Friendly Processes",
    "Custom Color Matching Available",
    "Fast Turnaround Times",
    "Comprehensive Quality Testing"
  ];

  const stats = [
    { number: "3", label: "Manufacturing Facilities", icon: <Award className="h-6 w-6" /> },
    { number: "35+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Sparkles className="h-6 w-6" /> }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden flex items-center">
        {/* Hero Background Image */}
        <img src="/assets/hero-bg.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-20">
          <motion.div
            animate={floatingAnimation}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"
          />
          
          {/* Geometric Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-30">
          <motion.div
            variants={staggerContainer}
            className="text-center text-white"
          >
             <motion.div
              // variants={fadeInUp}
              // className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
            >
              {/* <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Premium Coating Solutions Since 2003</span> */}
            </motion.div> 

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              <span className="block">Premium</span>
              <span className="block bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
                Coating Solutions
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow"
            >
              Transform your industrial assets with our advanced coating technologies. 
              Delivering superior protection, durability, and aesthetic excellence that exceeds industry standards.
            </motion.p>
            
            {/* <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/products"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-105">
                  <span>Explore Products</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                {/* <span>Contact us</span> */}
                {/* <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div> */}

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> 
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background text-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            {/* <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">Our Specialties</span>
            </motion.div> */}
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Coating
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer tailored coating technologies engineered to meet the demands of modern industrial applications, delivering excellent quality and performance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex"
              >
                <Card className="w-full flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-card">
                    <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-56 object-cover"
                    />
                    <CardContent className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-card-foreground mb-3">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Link
                            to={service.href}
                            className="inline-flex items-center text-primary font-semibold group"
                        >
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-20 text-white relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/benefits-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm" />
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
              >
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-semibold text-gray-200">Why Choose Us</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Excellence in Every
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Coating Application
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With decades of experience and cutting-edge technology, we deliver 
                coating solutions that exceed industry standards and customer expectations.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    </motion.div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute inset-0 rounded-3xl"
                />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Contact our team of coating specialists for a personalized consultation 
                    and competitive quote for your project. Experience the difference that 
                    premium coating solutions can make.
                  </p>
                  
                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="group relative overflow-hidden block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative inline-flex items-center w-full justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                        <span>Contact Us</span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </Link>
                    
                    <div className="text-center">
                      <span className="text-sm text-gray-400">
                         Free consultation • Fast response • Expert advice
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
