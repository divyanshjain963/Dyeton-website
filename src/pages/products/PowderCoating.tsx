import { motion } from "framer-motion";
import { Award, Leaf, ShieldCheck, Palette, Layers, Gem, Anchor, Sun, GitMerge } from "lucide-react";
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

const PowderCoating = () => {
  const features = [
    { name: "Superior Durability", icon: <Award className="w-8 h-8 text-blue-500" />, description: "Provides a long-lasting and resilient finish." },
    { name: "Excellent Gloss and Adhesion", icon: <Leaf className="w-8 h-8 text-blue-500" />, description: "Superior Gloss makes substrates looks more aesthetic." },
    { name: "Corrosion Resistance", icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, description: "Excellent protection against rust and corrosion." },
    { name: "Wide Color Range", icon: <Palette className="w-8 h-8 text-blue-500" />, description: "Available in a vast array of colors and finishes." },
    { name: "Uniform Application", icon: <Layers className="w-8 h-8 text-blue-500" />, description: "Achieves a consistent, smooth surface in one coat." },
    { name: "Scratch Resistant", icon: <Gem className="w-8 h-8 text-blue-500" />, description: "Resistant to chipping, scratching, and other wear." }
  ];

  const subCategories = [
    {
      name: "Pure Epoxy",
      value: "epoxy",
      // icon: <Anchor className="h-4 w-4" />,
      products: [
        { name: "Fusion Bonded Epoxy ", description: "High-adhesion epoxy for Rebars, Pipelines and Tanks protection.", tags: ["High Adhesion", "High Durability"], image: "/assets/rebars.jpg" },
        { name: "ChemResist Epoxy", description: "Excellent chemical resistance for lab equipment.", tags: ["Chemical Resistant", "Lab Grade"], image: "/assets/labinst.jpg" },
      ]
    },
    {
      name: "Polyester",
      value: "polyester",
      // icon: <Sun className="h-4 w-4" />,
      products: [
         { name: "PP Shield", description: "UV-stable polyester for outdoor appliances.", tags: ["UV Stable", "Outdoor"], image: "/assets/appliances.jpg" },
         { name: "SD Shield", description: "Architectural grade for window frames and facades.", tags: ["Architectural", "Facades"], image: "/assets/alprofile.jpg" },
      ]
    },
    {
      name: "Hybrid",
      value: "hybrid",
      // icon: <GitMerge className="h-4 w-4" />,
      products: [
        { name: "EP Hybrid", description: "Combines epoxy toughness with polyester smoothness.", tags: ["Flexible", "Smooth Finish"], image: "/assets/hybrid.jpg" },
        
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
        <img src="/assets/powder-coating-banner.jpg" alt="Powder Coating Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Powder Coating
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Superior, one-coat finish that is both eco-friendly and highly durable.
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">Engineered for performance and a flawless finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Powder Coating Products</h2>
            <p className="mt-4 text-lg text-gray-600">Find the perfect coating system for your application.</p>
          </div>
          <Tabs defaultValue={subCategories[0].value} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
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
export default PowderCoating;
