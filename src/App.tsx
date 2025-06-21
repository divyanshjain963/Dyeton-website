
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsLayout from "./pages/ProductsLayout";
import PowderCoating from "./pages/products/PowderCoating";
import ProtectiveCoating from "./pages/products/ProtectiveCoating";
import IndustrialCoating from "./pages/products/IndustrialCoating";
import SpecialtyCoating from "./pages/products/SpecialtyCoating";
import TrafficSolutions from "./pages/products/TrafficSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<Navigate to="powder" replace />} />
            <Route path="powder" element={<PowderCoating />} />
            <Route path="protective" element={<ProtectiveCoating />} />
            <Route path="industrial" element={<IndustrialCoating />} />
            <Route path="specialty" element={<SpecialtyCoating />} />
            <Route path="traffic" element={<TrafficSolutions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
