import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(private carsService:CarsService,private brandService:BrandsService){

  }
  populateDB(){    
    this.carsService.fillDataWithSeed(CARS_SEED);
    this.brandService.fillDataWithSeed(BRAND_SEED);    
    return 'SEED executed';
  }
}
