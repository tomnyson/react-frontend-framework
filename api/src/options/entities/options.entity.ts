import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OptionValuesEntity } from '../../option-values/entities/option-values.entity'
import { ProductOptionEntity } from '../../product-options/entities/product-options.entity'
import { ProductSkuValuesEntity } from '../../product-sku-values/entities/product-sku-value.entity'

@Entity('options')
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => OptionValuesEntity, optionValues => optionValues.option)
  optionsValues: OptionValuesEntity[];

  @OneToMany(() => ProductOptionEntity, productOption => productOption.option)
  productOptions: ProductOptionEntity[];

  @OneToMany(() => ProductSkuValuesEntity, productSkuValue => productSkuValue.option)
  productSkuValues: ProductSkuValuesEntity[];

}