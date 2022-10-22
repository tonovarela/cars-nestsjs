import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carService.getAll();
    }


    @Get(':id')
    getByID(@Param('id', ParseIntPipe) id: number) {
        const car = this.carService.getById(id);;
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return { ok: true, car };
    }

    @Post()
    create(@Body() body: any) {
        return {
            ok: true,
            car: body
        }

    }

    @Patch(":id")
    update(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
        return {
            ok: true,
            car: body
        }
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return {
            ok: true,
            id,
            method:"delete"
        }

    }

}
