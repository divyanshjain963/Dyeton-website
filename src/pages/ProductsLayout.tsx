
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsLayout = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <Outlet />
      </motion.div>
    </div>
  );
};

export default ProductsLayout;
