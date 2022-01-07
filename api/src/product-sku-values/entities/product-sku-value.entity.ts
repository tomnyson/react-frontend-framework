import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { OptionEntity } from '../../options/entities/options.entity'
import { OptionValuesEntity } from '../../option-values/entities/option-values.entity'
import { ProductSkusEntity } from '../../product-skus/entities/product-skus.entity'
import { ProductsEntity } from '../../products/entities/product.entity'

@Entity('product_sku_values')
export class ProductSkuValuesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  value: string;

  @ManyToOne(() => OptionEntity, option => option.productSkuValues)
  option: OptionEntity;

  @ManyToOne(() => ProductSkusEntity, product_sku => product_sku.sku)
  sku: ProductSkusEntity;

  @ManyToOne(() => ProductsEntity, product => product.product_sku_values)
  product: ProductsEntity;

  @OneToMany(() => OptionValuesEntity, option_value => option_value.option_values)
  option_value: OptionValuesEntity;

  setOption(option: OptionEntity) {
    this.option = option;
  }
}