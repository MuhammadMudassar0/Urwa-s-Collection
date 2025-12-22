export type ProductCategory = "makeup" | "jewellery" | "hair-accessories";

export type ProductType =
  | "foundation"
  | "base"
  | "face-powder"
  | "blush"
  | "bracelet"
  | "necklace"
  | "ring"
  | "earring"
  | "hair-band"
  | "pony"
  | "clip"
  | "bow"
  | "hair-catcher"
  | "pin";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  image: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

