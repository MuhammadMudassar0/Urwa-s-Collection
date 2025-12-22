"use client";

import { FC } from "react";
import Link from "next/link";
import ProductCard from "@/features/product-card";
import ProductFilters from "@/features/product-filters";
import ProductSearch from "@/features/product-search";
import { useProductsFilter } from "@/features/products-page/use-products-filter";
import { Sparkles, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

const HomePage: FC = () => {
  const {
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
    error,
  } = useProductsFilter();
  const totalItems = useCartStore((state) => state.getTotalItems());

  const groupedProducts = filteredProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, typeof filteredProducts>
  );

  const categoryLabels: Record<string, string> = {
    makeup: "Makeup Products",
    jewellery: "Jewellery",
    "hair-accessories": "Hair Accessories",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Urwah Trends
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              <p className="hidden md:block text-sm text-muted-foreground">
                Your Beauty & Fashion Destination
              </p>
              <Link
                href="/cart"
                className="relative flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="hidden sm:inline">Cart</span>
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <ProductSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedType={selectedType}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategory}
                onTypeChange={setSelectedType}
                onPriceRangeChange={setPriceRange}
              />
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">Loading products...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-lg text-destructive mb-2">
                    Error loading products
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {error.message}
                  </p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-2">
                    No products found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                </div>
              ) : (
                <div className="space-y-12">
                  {Object.entries(groupedProducts).map(([category, products]) => (
                    <section key={category} className="space-y-4">
                      <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary/30 pb-2">
                        {categoryLabels[category] || category}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Urwah Trends. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

