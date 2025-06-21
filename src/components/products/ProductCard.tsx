
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export type Product = {
  name: string;
  description: string;
  tags: string[];
  image?: string; // Optional image property
};

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="h-full flex flex-col group hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
    {product.image && (
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <CardHeader className={product.image ? "pb-4" : ""}>
      <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col justify-end">
      <div className="flex flex-wrap gap-2">
        {product.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
      </div>
    </CardContent>
  </Card>
);

export default ProductCard;
