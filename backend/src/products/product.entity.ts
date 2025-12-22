import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type ProductCategory = 'makeup' | 'jewellery' | 'hair-accessories';

export type ProductType =
  | 'foundation'
  | 'base'
  | 'face-powder'
  | 'blush'
  | 'bracelet'
  | 'necklace'
  | 'ring'
  | 'earring'
  | 'hair-band'
  | 'pony'
  | 'clip'
  | 'bow'
  | 'hair-catcher'
  | 'pin';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['makeup', 'jewellery', 'hair-accessories'],
  })
  category: ProductCategory;

  @Column({
    type: 'enum',
    enum: [
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
    ],
  })
  type: ProductType;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  image: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

