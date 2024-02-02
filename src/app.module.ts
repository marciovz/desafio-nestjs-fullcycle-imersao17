import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { OrdersModule } from './orders/orders.module';
import { Asset } from './assets/entities/asset.entity';
import { AppService } from './app.service';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.db/sql',
      entities: [Asset, Order],
      synchronize: true,  
      logging: true,    
    }),
    AssetsModule, 
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
