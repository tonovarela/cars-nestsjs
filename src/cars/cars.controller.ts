import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDTO } from './DTO/cat.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
    constructor(private readonly carService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carService.getAll();
    }

    @Get(':id')    
    getByID(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carService.getById(id);;
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return { ok: true, car };
    }

    @Post()       
    create(@Body() carDTO: CarDTO) {
        const newCar =this.carService.create(carDTO);
        return {
            ok: true,
            car: newCar
        }
    }

    @Patch(":id")
    update(@Body() carDTO: CarDTO, @Param('id', ParseUUIDPipe) id: string) {
        const car = this.carService.getById(id);
        if (!car) throw new NotFoundException(`Car with id  not found`);
        const updatedCar = this.carService.update(id,carDTO);
        return {
            ok: true,
            car: updatedCar
        }        
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carService.getById(id);
        if (!car) throw new NotFoundException(`Car with id  not found`);
        this.carService.delete(id);
        return {
            ok: true,
             deletedCar:car
        }
    
    }

}
