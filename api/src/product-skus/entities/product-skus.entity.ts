import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductsEntity } from '../../products/entities/product.entity'

@Entity('product_skus')
export class ProductSkusEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  sku: string;
  @Column()
  price: number;
  @Column()
  quantity: number;
  @ManyToOne(() => ProductsEntity, product => product.product_skus)
  product: ProductsEntity
}
