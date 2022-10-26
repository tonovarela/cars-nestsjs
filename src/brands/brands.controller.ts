import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    const brand=this.brandsService.findOne(id);
    if (!brand){
      throw new NotFoundException('Brand not found');
    }
    return brand
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateBrandDto: UpdateBrandDto) {
    const brand=this.brandsService.findOne(id);
    if (!brand){
      throw new NotFoundException('Brand not found');
    }
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    const brand=this.brandsService.findOne(id);
    if (!brand){
      throw new NotFoundException('Brand not found');
    }
    return this.brandsService.remove(id);
  }
}
