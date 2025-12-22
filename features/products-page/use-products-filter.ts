"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, ProductCategory, ProductType } from "@/types/product";
import { productsService } from "@/services/products-service";

interface UseProductsFilterReturn {
  filteredProducts: Product[];
  searchQuery: string;
  selectedCategory: ProductCategory | "all";
  selectedType: ProductType | "all";
  priceRange: { min: number; max: number };
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: ProductCategory | "all") => void;
  setSelectedType: (type: ProductType | "all") => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  isLoading: boolean;
  error: Error | null;
}

export const useProductsFilter = (): UseProductsFilterReturn => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "all"
  >("all");
  const [selectedType, setSelectedType] = useState<ProductType | "all">("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.getAll(),
    // Fallback to local products if API fails
    retry: 1,
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.type.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((product) => product.type === selectedType);
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedType, priceRange]);

  return {
    filteredProducts,
    searchQuery,
    selectedCategory,
    selectedType,
    priceRange,
    setSearchQuery,
    setSelectedCategory,
    setSelectedType,
    setPriceRange,
    isLoading,
    error: error as Error | null,
  };
};

