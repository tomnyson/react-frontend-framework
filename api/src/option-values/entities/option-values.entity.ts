import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { OptionEntity } from '../../options/entities/options.entity'
import { ProductSkuValuesEntity } from '../../product-sku-values/entities/product-sku-value.entity'

@Entity('option_values')
export class OptionValuesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  value: string;

  @ManyToOne(() => OptionEntity, options => options.optionsValues)
  option: OptionEntity;

  @OneToMany(() => ProductSkuValuesEntity, product_sku_values => product_sku_values.option_value)
  option_values: ProductSkuValuesEntity[];

  setOption(option: OptionEntity) {
    this.option = option;
  }
}