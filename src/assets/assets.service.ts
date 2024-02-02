import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {

  constructor(
    @InjectRepository(Asset) private assetsRepo: Repository<Asset>,
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    const assetFinded = await this.assetsRepo.findOneBy({ id: createAssetDto.id });

    console.log(assetFinded);

    if(assetFinded) {
      throw new Error('Asset já existe.');
    }

    const asset = this.assetsRepo.create(createAssetDto);
    return this.assetsRepo.save(asset);
  }

  findAll() {
    return this.assetsRepo.find();
  }

  findOne(id: string) {
    return this.assetsRepo.findOneByOrFail({ id });
  }

}
