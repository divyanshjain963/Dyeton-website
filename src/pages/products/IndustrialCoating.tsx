import React from "react";
import { motion } from "framer-motion";
import { Shield, Wind, Layers, PaintRoller } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/products/ProductCard";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    },
  }),
};

const features = [
    { name: 'Heavy-Duty Protection', icon: <Shield className="w-8 h-8 text-blue-500" />, description: 'Resists harsh industrial environments and chemical exposure.' },
    { name: 'Versatile Application', icon: <PaintRoller className="w-8 h-8 text-blue-500" />, description: 'Suitable for various substrates including metal, concrete, and plastics.' },
    { name: 'Fast Curing', icon: <Wind className="w-8 h-8 text-blue-500" />, description: 'Quick-drying formulas to minimize downtime and increase productivity.' },
    { name: 'High Adhesion', icon: <Layers className="w-8 h-8 text-blue-500" />, description: 'Excellent bonding properties for long-lasting performance.' },
];

const industrialProducts = {
  'epoxy-coatings': [
    { name: 'FN Epoxy', description: 'High-build, chemical-resistant epoxy for concrete floors.', tags: ['Chemical Resistant', 'High Traffic'], image: "/assets/EP.jpg"},
    { name: 'Epoxy Primer', description: 'Anti-corrosive primer for structural steel.', tags: ['Anti-Corrosion', 'Primer'], image: "/assets/EPrimer.jpg" },
    { name: 'WB Epoxy', description: 'Water-based epoxy coating for low-odor applications.', tags: ['Water-Based', 'Low VOC'], image: "/assets/hybrid.jpg" },
  ],
  'polyurethane-coatings': [
    { name: 'PU Topcoat', description: 'It is a 2 pack high gloss polyurethane based coating with SST ranging between 750-1250 hrs.', tags: ['UV Stable', 'Gloss Finish'], image:"/assets/PU.jpg" },
    // { name: 'FlexiCoat PU Membrane', description: 'Flexible waterproofing membrane for roofs and decks.', tags: ['Waterproofing', 'Flexible'] },
    // { name: 'InduThane 9000', description: 'Heavy-duty polyurethane for high-impact areas.', tags: ['High-Impact', 'Abrasion Resistant'] },
  ],
  'high-performance-enamels': [
    { name: 'RapidEnamel DTM', description: 'Direct-to-metal water based coating compliant to european standards.', tags: ['Low VOC', 'Lead Free'],image: "/assets/DTM.jpg" },
    { name: 'Flex Enamel', description: 'It is easy to use flexible coating that remains adhere to the surface when bended/twisted.', tags: ['Easy to use', 'High Adhesion'], image: "/assets/Enamel.jpg" },
    { name: 'IS 2932 Enamel', description: 'This is high gloss top coat enamel coating which compliant to IS 2932 tests.', tags: ['Gloss >90°', 'High Durability'], image: "/assets/IS2074.jpg"  },
  ],
  'primer-systems': [
    { name: 'ZincRich Primer ', description: 'Zinc-rich primer for maximum corrosion protection.', tags: ['Zinc-Rich', 'Corrosion Protection'], image: "/assets/PB-zinc.jpg" },
    { name: 'Economical Redoxide Primer', description: 'Cost effective redoxide primer with SST of about 150-200 hours.', tags: ['Easy to use', 'Low VOC'], image: "/assets/GI.jpg" },
    { name: 'IS 2074 Compliant Primer', description: 'This is an high adhesion redoxide primer that follows all the compliance as per BIS.', tags: ['DFT 30-40 um', 'High hardness'], image: "/assets/IS2074.jpg" },
  ]
};

const IndustrialCoating = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      <div className="relative bg-gradient-to-b from-blue-100 to-gray-50 overflow-hidden">
        {/* Banner Background Image */}
        <img src="/assets/GI-coatings.jpg" alt="GI Coatings Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            General Industrial Coatings
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Versatile and Robust Solutions for Every Industrial Need
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core Features</h2>
            <p className="mt-4 text-lg text-gray-600">Engineered for performance and reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.name}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                className="text-center"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Industrial Product Line</h2>
            <p className="mt-4 text-lg text-gray-600">Find the perfect coating system for your project.</p>
          </div>
          <Tabs defaultValue="epoxy-coatings" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="epoxy-coatings">Epoxy Coatings</TabsTrigger>
              <TabsTrigger value="polyurethane-coatings">Polyurethane Coatings</TabsTrigger>
              <TabsTrigger value="high-performance-enamels">High-Performance Enamels</TabsTrigger>
              <TabsTrigger value="primer-systems">Primer Systems</TabsTrigger>
            </TabsList>
            <TabsContent value="epoxy-coatings">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industrialProducts['epoxy-coatings'].map(p => <ProductCard key={p.name} product={p} />)}
              </div>
            </TabsContent>
            <TabsContent value="polyurethane-coatings">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industrialProducts['polyurethane-coatings'].map(p => <ProductCard key={p.name} product={p} />)}
              </div>
            </TabsContent>
            <TabsContent value="high-performance-enamels">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industrialProducts['high-performance-enamels'].map(p => <ProductCard key={p.name} product={p} />)}
              </div>
            </TabsContent>
            <TabsContent value="primer-systems">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industrialProducts['primer-systems'].map(p => <ProductCard key={p.name} product={p} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustrialCoating;
