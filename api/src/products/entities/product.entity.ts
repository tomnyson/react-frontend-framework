import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity'
import { ProductOptionEntity } from '../../product-options/entities/product-options.entity'
import { ProductSkusEntity } from '../../product-skus/entities/product-skus.entity'
import { ProductSkuValuesEntity } from '../../product-sku-values/entities/product-sku-value.entity'

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[]

  @Column({
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @OneToMany(() => ProductOptionEntity, (optionsProduct) => optionsProduct.product)
  productOptions: ProductOptionEntity[]

  @OneToMany(() => ProductSkusEntity, (product_skus) => product_skus.product)
  product_skus: ProductSkusEntity[]

  @OneToMany(() => ProductSkuValuesEntity, (product_sku_values) => product_sku_values.product)
  product_sku_values: ProductSkuValuesEntity[]

}
