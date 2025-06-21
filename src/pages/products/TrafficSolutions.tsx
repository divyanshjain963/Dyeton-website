import { motion } from "framer-motion";
import { Car, AlertTriangle, MapPin, Zap } from "lucide-react";
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

const TrafficSolutions = () => {
  const features = [
    { name: "High Visibility", icon: <AlertTriangle className="w-8 h-8 text-blue-500" />, description: "Bright, reflective markings for enhanced road safety." },
    { name: "Weather Resistant", icon: <Car className="w-8 h-8 text-blue-500" />, description: "Durable performance in all weather conditions." },
    { name: "Long-Lasting", icon: <MapPin className="w-8 h-8 text-blue-500" />, description: "Extended service life reducing maintenance costs." },
    { name: "Fast Application", icon: <Zap className="w-8 h-8 text-blue-500" />, description: "Quick-drying formulas for minimal traffic disruption." }
  ];

  const subCategories = [
    {
      name: "Hot-Melt Markings",
      value: "road-marking",
      // icon: <Car className="h-4 w-4" />,
      products: [
        { name: "TPA Marking", description: "Premium road marking paint for highways and arterials.", tags: ["Highway Grade", "High Durability"], image:"/assets/TPA.jpg" },
        // { name: "ReflectoMark", description: "Reflective road marking paint with glass beads.", tags: ["Reflective", "Glass Beads"] }
      ]
    },
    {
      name: "Water Based Markings",
      value: "parking-lots",
      // icon: <MapPin className="h-4 w-4" />,
      products: [
         { name: "WB Marking", description: "Cost-effective marking solution for Road sides and parking areas.", tags: ["Cost-Effective", "Low VOC"], image:"/assets/WB-marking.jpg" },
        //  { name: "DuraStripe Commercial", description: "Heavy-duty striping for commercial lots.", tags: ["Heavy-Duty", "Commercial"] }
      ]
    },
    {
      name: "Skid Resistant Colored Markings",
      value: "safety-zones",
      // icon: <AlertTriangle className="h-4 w-4" />,
      products: [
        { name: "SafeZone Yellow", description: "High-visibility yellow paint for safety areas.", tags: ["High-Visibility", "Safety Yellow"], image: "/assets/Cl-marking.jpg" },
        // { name: "HazardMark Orange", description: "Bright orange coating for construction zones.", tags: ["Construction", "Orange"] }
      ]
    },
    {
      name: "Floor Coating",
      value: "airport-markings",
      // icon: <Zap className="h-4 w-4" />,
      products: [
        { name: "Glossy Epoxy Flooring", description: "It is smooth and glossy finish floor coating that resists seepage and protect the building from moisture", tags: ["High Loading Capacity", "Easy to Clean"], image:"/assets/GE-flooring.jpg"},
        { name: "Marble Finish Flooring", description: "A newly launched product that is gaining demand from residential properties.", tags: ["Aesthetics", "Easy to Clean"], image:"/assets/Marble.jpg" }
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
      <div className="relative bg-gradient-to-b from-red-100 to-gray-50 overflow-hidden">
        {/* Banner Background Image */}
        <img src="/assets/traffic-bn.jpg" alt="Traffic Solutions Banner" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Traffic Solutions
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Professional road marking and traffic safety coating solutions.
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">Engineered for safety and durability.</p>
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
                <div className="inline-block p-4 bg-red-100 rounded-lg">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Traffic Solution Products</h2>
            <p className="mt-4 text-lg text-gray-600">Complete range of traffic marking solutions.</p>
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

export default TrafficSolutions;
