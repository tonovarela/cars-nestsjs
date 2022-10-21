import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) {}
    
    @Get()
    getAllCars() {
        return this.carService.getAll();
    }

    @Get(':id')    
    getByID(@Param('id') id: string) {
        const car = this.carService.getById(+id);;
        if (car == undefined) {
            return { ok: "false", mensaje: "Car not found" };
        }
        return { ok: true, car };
    }



}
