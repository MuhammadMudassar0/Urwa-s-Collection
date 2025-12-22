import { apiClient } from '@/lib/api-client';
import { Product } from '@/types/product';

export interface CreateProductDto {
  name: string;
  category: Product['category'];
  type: Product['type'];
  price: number;
  image: string;
  description: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export const productsService = {
  getAll: async (): Promise<Product[]> => {
    return apiClient.get<Product[]>('/products');
  },

  getById: async (id: string): Promise<Product> => {
    return apiClient.get<Product>(`/products/${id}`);
  },

  create: async (data: CreateProductDto): Promise<Product> => {
    return apiClient.post<Product>('/products', data);
  },

  update: async (id: string, data: UpdateProductDto): Promise<Product> => {
    return apiClient.patch<Product>(`/products/${id}`, data);
  },

  delete: async (id: string): Promise<void> => {
    return apiClient.delete<void>(`/products/${id}`);
  },
};

