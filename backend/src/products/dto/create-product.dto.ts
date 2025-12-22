import {
  IsString,
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsUrl,
  Min,
} from 'class-validator';
import { ProductCategory, ProductType } from '../product.entity';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['makeup', 'jewellery', 'hair-accessories'])
  category: ProductCategory;

  @IsEnum([
    'foundation',
    'base',
    'face-powder',
    'blush',
    'bracelet',
    'necklace',
    'ring',
    'earring',
    'hair-band',
    'pony',
    'clip',
    'bow',
    'hair-catcher',
    'pin',
  ])
  type: ProductType;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsUrl()
  image: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

