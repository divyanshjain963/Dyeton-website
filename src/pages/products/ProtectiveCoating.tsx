import { motion } from "framer-motion";
import { Shield, HardHat, Waves, Flame, Droplets } from "lucide-react";
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

const ProtectiveCoating = () => {
  const features = [
    { name: "Abrasion Resistance", icon: <HardHat className="w-8 h-8 text-blue-500" />, description: "Withstands extreme wear and tear in harsh environments." },
    { name: "Chemical Defense", icon: <Shield className="w-8 h-8 text-blue-500" />, description: "Superior protection against corrosion and chemical spills." },
    { name: "Impact Flexibility", icon: <Waves className="w-8 h-8 text-blue-500" />, description: "Remains flexible and intact even in high-impact areas." }
  ];

  const subCategories = [
    {
      name: "Coils and Roofing",
      value: "anti-corrosion",
      // icon: <Shield className="h-4 w-4" />,
      products: [
        { name: "PVDF Coatings", description: "Super Durable coating that increases the weather resistant properties by 20 years.", tags: ["Aluminium", "Steel"] },
        { name: "TP Coatings", description: "This is an high gloss top coat coating which increases finishing of the product.", tags: ["High Gloss", "High Impact Resistance"] }
      ]
    },
    {
      name: "Oil and Gas",
      value: "fire-retardant",
      // icon: <Flame className="h-4 w-4" />,
      products: [
         { name: "Black Bituminous Coatings", description: "It's an anti corrosive high gloss coating which protects carbon steel from corrosion.", tags: ["Pipeline", "Tanks","STP poles"] },
         { name: "Epoxy Liquid", description: "Uses where high corrosion protection is required.", tags: ["Ships", "Containers","Offshore Structures"] }
      ]
    },
    {
      name: "Automotive",
      value: "marine-grade",
      // icon: <Waves className="h-4 w-4" />,
      products: [
        { name: "TSA Based Coatings", description: "To provide extra protection to Automotive bodies, This is the most economic and durable solution.", tags: ["E-Rickshaws", "Bicycles", "Cars"] },
        { name: "AD Matte Black", description: "This is fast drying solution for the automotive parts that provides higher durability and adhesion to the surface.", tags: ["Leaf Springs", "Engines"] }
      ]
    },
    {
      name: "Repair and Maintenance",
      value: "chemical-resistant",
      // icon: <Droplets className="h-4 w-4" />,
      products: [
        { name: "Epoxy Primer", description: "It is used for the industrial maintenance.", tags: ["Refineries", "Food Industries"] },
        // { name: "", description: "Specialized coating for acid storage and handling areas.", tags: ["Acid Resistant", "Storage"] }
      ]
    },
    {
      name: "Fire Retardant",
      value: "high-temperature",
      // icon: <Flame className="h-4 w-4" />,
      products: [
        { name: "FR Coating", description: "It is an specially designed coating which helps in resisting the material from direct flame upto certain temperature.", tags: ["Fire Exit Gates"] },
        // { name: "ThermalBarrier Plus", description: "Thermal barrier coating for furnace applications.", tags: ["Thermal Barrier", "Furnace"] }
      ]
    }
  ];

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
        <img src="/assets/protective-coating.jpg" alt="Protective Coating Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Protective Coatings
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Engineered for the toughest environments to extend asset life.
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core Strengths</h2>
            <p className="mt-4 text-lg text-gray-600">Robust defense for your valuable assets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Protective Coating Products</h2>
            <p className="mt-4 text-lg text-gray-600">Find the perfect coating system for your project.</p>
          </div>
          <Tabs defaultValue={subCategories[0].value} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {subCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.value} className="flex items-center gap-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {subCategories.map((category) => (
              <TabsContent key={category.name} value={category.value}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};
export default ProtectiveCoating;
