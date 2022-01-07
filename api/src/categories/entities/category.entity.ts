import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity('categories')
@Tree("materialized-path")
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    default: ''
  })
  description: string;

  @Column({
    default: ''
  })
  icon: string;

  @Column({
    default: ''
  })
  banner: string;



  @TreeParent()
  // @ManyToOne(type => CategoryEntity, category => category.children)
  parent: CategoryEntity;

  @TreeChildren()
  // @OneToMany(type => CategoryEntity, category => category.parent)
  children: CategoryEntity[];

  setParent(parent: CategoryEntity) {
    this.parent = parent;
  }
  setChildren(children: CategoryEntity) {
    if (this.children !== null) {
      this.children = []
    } else {
      this.children.push(children);
    }
  }

}
