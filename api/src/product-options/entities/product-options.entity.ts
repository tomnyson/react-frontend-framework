import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OptionEntity } from '../../options/entities/options.entity'
import { ProductsEntity } from '../../products/entities/product.entity'

@Entity('product_options')
export class ProductOptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductsEntity, product => product.productOptions)
  public product: ProductsEntity;

  @ManyToOne(() => OptionEntity, option => option.productOptions)
  option: OptionEntity;

}
