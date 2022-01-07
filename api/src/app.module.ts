import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './controllers/cats.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OptionsModule } from './options/options.module';
import { OptionValuesModule } from './option-values/option-values.module';
import { ProductOptionsModule } from './product-options/product-options.module';
import { ProductSkusModule } from './product-skus/product-skus.module';
import { ProductSkuValuesModule } from './product-sku-values/product-sku-values.module';

@Module({
  imports: [AuthModule, UsersModule, RolesModule,
    CategoriesModule, ProductsModule, OrdersModule,
    OptionsModule, OptionValuesModule, ProductOptionsModule,
    ProductSkusModule,
    ProductSkuValuesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule { }
