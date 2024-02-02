import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Asset) private assetRepo: Repository<Asset>
  ){}

  async create(createOrderDto: CreateOrderDto) {
    const { asset_id } = createOrderDto;
    const assetFinded = await this.assetRepo.findOneBy({ id: asset_id });

    const relationFinded = await this.orderRepo.findOneBy({ asset_id });

    if(relationFinded) {
      throw new Error('O asset informado já possui uma order relacionada.');
    }

    let asset = undefined;

    if(!assetFinded) {
      asset = {
        id: asset_id,
        symbol: "",
      } 
    } 

    const order = this.orderRepo.create({ ...createOrderDto, asset });
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: string) {
    return this.orderRepo.findOneBy({ id });
  }

}
