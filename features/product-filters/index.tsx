"use client";

import { FC } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ProductCategory, ProductType } from "@/types/product";

interface ProductFiltersProps {
  selectedCategory: ProductCategory | "all";
  selectedType: ProductType | "all";
  priceRange: { min: number; max: number };
  onCategoryChange: (category: ProductCategory | "all") => void;
  onTypeChange: (type: ProductType | "all") => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

const ProductFilters: FC<ProductFiltersProps> = ({
  selectedCategory,
  selectedType,
  priceRange,
  onCategoryChange,
  onTypeChange,
  onPriceRangeChange,
}) => {
  const categoryOptions: { value: ProductCategory | "all"; label: string }[] = [
    { value: "all", label: "All Categories" },
    { value: "makeup", label: "Makeup Products" },
    { value: "jewellery", label: "Jewellery" },
    { value: "hair-accessories", label: "Hair Accessories" },
  ];

  const typeOptions: { value: ProductType | "all"; label: string }[] = [
    { value: "all", label: "All Types" },
    { value: "foundation", label: "Foundation" },
    { value: "base", label: "Base" },
    { value: "face-powder", label: "Face Powder" },
    { value: "blush", label: "Blush" },
    { value: "bracelet", label: "Bracelet" },
    { value: "necklace", label: "Necklace" },
    { value: "ring", label: "Ring" },
    { value: "earring", label: "Earring" },
    { value: "hair-band", label: "Hair Band" },
    { value: "pony", label: "Pony" },
    { value: "clip", label: "Clip" },
    { value: "bow", label: "Bow" },
    { value: "hair-catcher", label: "Hair Catcher" },
    { value: "pin", label: "Pin" },
  ];

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border shadow-sm">
      <h2 className="text-xl font-bold text-foreground">Filters</h2>
      <Separator />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={selectedCategory}
            onValueChange={(value) =>
              onCategoryChange(value as ProductCategory | "all")
            }
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Select
            value={selectedType}
            onValueChange={(value) => onTypeChange(value as ProductType | "all")}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Price Range (PKR)</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="min-price" className="text-xs text-muted-foreground">
                Min
              </Label>
              <Input
                id="min-price"
                type="number"
                placeholder="0"
                value={priceRange.min || ""}
                onChange={(e) =>
                  onPriceRangeChange({
                    min: Number(e.target.value) || 0,
                    max: priceRange.max,
                  })
                }
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="max-price" className="text-xs text-muted-foreground">
                Max
              </Label>
              <Input
                id="max-price"
                type="number"
                placeholder="50000"
                value={priceRange.max || ""}
                onChange={(e) =>
                  onPriceRangeChange({
                    min: priceRange.min,
                    max: Number(e.target.value) || 50000,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;

