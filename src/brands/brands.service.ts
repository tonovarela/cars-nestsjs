import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // }, {
    //   id: uuid(),
    //   name: 'Honda',
    //   createdAt: new Date().getTime(),

    // }
  ]
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    let brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    return this.brands.find(b => b.id === id);;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    this.brands = this.brands.map(b => {
      if (b.id === id) {
        return {
          updatedAt: new Date().getTime(),
          ...b,
          ...updateBrandDto
        }
      }
      return b
    });
    return brand;

  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter(b => b.id != id);
    return brand;

  }

  fillDataWithSeed(brands: Brand[]) {
    this.brands = brands;

  }

}