
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "3", label: "Manufacturing Facilities" },
    { icon: <Award className="h-8 w-8" />, number: "35+", label: "Years Experience" },
    { icon: <Target className="h-8 w-8" />, number: "98%", label: "Customer Satisfaction" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "50+", label: "Industry Partners" }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in every coating application, ensuring superior results that exceed industry benchmarks."
    },
    {
      title: "Innovation Focus",
      description: "Continuously investing in cutting-edge technology and techniques to provide the most advanced coating solutions available."
    },
    {
      title: "Environmental Responsibility",
      description: "Committed to eco-friendly processes and sustainable practices that protect both your assets and the environment."
    },
    {
      title: "Customer Partnership",
      description: "Building long-term relationships through transparent communication, reliable service, and exceptional support."
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Dyeton Paints
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Leading the industry in advanced coating technologies with more than three decades of expertise, 
              innovation, and unwavering commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1991, Dyeton Paints began as a small coating manufacturing company 
                  whose aim is to deliver the best quality products to the customers and with a vision to revolutionize industrial surface protection. Today, 
                  we stand as a leading provider of advanced coating solutions, serving 
                  industries across manufacturing, construction, and engineering modules.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, 
                  and an unwavering commitment to quality. From our state-of-the-art facility, 
                  we deliver comprehensive coating services that protect and enhance industrial 
                  assets worldwide.
                </p>
                <p>
                  We believe that the best coating solutions are built on the foundation of 
                  technical expertise, quality materials, and genuine customer partnerships. 
        
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                      <p className="text-gray-600">State-of-the-art equipment and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Certified professionals with decades of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                      <p className="text-gray-600">Rigorous testing and quality control processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                      <p className="text-gray-600">Tailored approaches for unique requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
