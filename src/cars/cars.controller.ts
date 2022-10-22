import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './DTO/create-cat.dto';

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
    create(@Body() createCarDTO: CreateCarDTO) {
        return {
            ok: true,
            car: createCarDTO
        }
    }

    @Patch(":id")
    update(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
        return {
            ok: true,
            car: body
        }
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string) {
        return {
            ok: true,
            id,
            method: "delete"
        }

    }

}
