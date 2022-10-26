import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CarDTO } from './DTO/car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // { id: uuid(), brand: "Toyota", model: "Corola" },
        // { id: uuid(), brand: "Honda", model: "Civic" },
        // { id: uuid(), brand: "Honda", model: "Accord" },
    ];

    public getAll() {
        return this.cars
    }

    public getById(id: string) {
        const car = this.cars.find(c => c.id == id);
        return car
    }

    public create(createCar: CarDTO) {
        let newCar: Car = { ...createCar, id: uuid() };
        this.cars.push(newCar);
        return newCar;
    }
    public update(id: string, updateCar: CarDTO) {
        let car = this.getById(id);
        car.brand = updateCar.brand
        car.model = updateCar.model;        
        return car;
    }

    public delete(id: string) {        
        this.cars = this.cars.filter(c => c.id != id);        
    }

    fillDataWithSeed(cars:Car[]){
        this.cars = cars;
    }






}
