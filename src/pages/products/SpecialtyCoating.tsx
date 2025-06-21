import { motion } from "framer-motion";
import { Star, Zap, Eye, Thermometer } from "lucide-react";
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

const SpecialtyCoating = () => {
  const features = [
    { name: "High-Performance", icon: <Star className="w-8 h-8 text-blue-500" />, description: "Advanced formulations for specialized applications." },
    { name: "Anti-Static", icon: <Zap className="w-8 h-8 text-blue-500" />, description: "Prevents static buildup in sensitive environments." },
    { name: "Anti-Graffiti", icon: <Eye className="w-8 h-8 text-blue-500" />, description: "Easy cleaning and graffiti removal capabilities." },
    { name: "High-Temperature", icon: <Thermometer className="w-8 h-8 text-blue-500" />, description: "Withstands extreme temperatures up to 1000°C." }
  ];

  const subCategories = [
    {
      name: "Food Grade",
      value: "food-grade",
      // icon: <Star className="h-4 w-4" />,
      products: [
        { name: "FoodSafe Pro", description: "FDA-compliant coating for food processing equipment.", tags: ["FDA Compliant", "Food Processing"] },
        { name: "CleanShield FG", description: "Easy-clean coating for commercial kitchens.", tags: ["Easy Clean", "Commercial"] }
      ]
    },
    {
      name: "UV Based Coating",
      value: "anti-static",
      // icon: <Zap className="h-4 w-4" />,
      products: [
         { name: "StaticGuard ESD", description: "Electrostatic discharge protection for electronics manufacturing.", tags: ["ESD Protection", "Electronics"] },
         { name: "ConductaCoat AS", description: "Conductive coating for static-sensitive areas.", tags: ["Conductive", "Static Control"] }
      ]
    },
    {
      name: "High-Temperature",
      value: "high-temperature",
      // icon: <Thermometer className="h-4 w-4" />,
      products: [
        { name: "HeatShield 1000", description: "Ceramic-based coating for extreme heat applications.", tags: ["Ceramic", "1000°C"] },
        { name: "ThermoGuard Plus", description: "Silicone coating for furnace and exhaust systems.", tags: ["Silicone", "Exhaust Systems"] }
      ]
    },
    {
      name: "Anti-Carbonation",
      value: "anti-graffiti",
      // icon: <Eye className="h-4 w-4" />,
      products: [
        { name: "GraffiShield Clear", description: "Transparent protective coating for public surfaces.", tags: ["Transparent", "Public Surfaces"] },
        { name: "EasyClean AG", description: "Semi-permanent anti-graffiti coating system.", tags: ["Semi-Permanent", "Easy Removal"] }
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
      <div className="relative bg-gradient-to-b from-orange-100 to-gray-50 overflow-hidden">
        {/* Banner Background Image */}
        <img src="/assets/specialty- banner.jpg" alt="Specialty Coatings Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Specialty Coatings
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Advanced specialized coatings for unique applications and demanding environments.
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Specialized Features</h2>
            <p className="mt-4 text-lg text-gray-600">Engineered for unique performance requirements.</p>
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
                <div className="inline-block p-4 bg-orange-100 rounded-lg">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Specialty Coating Products</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored solutions for specialized applications.</p>
          </div>
          <Tabs defaultValue={subCategories[0].value} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {subCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.value} className="flex items-center gap-2">
                  {/* {category.icon} */}
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

export default SpecialtyCoating;
