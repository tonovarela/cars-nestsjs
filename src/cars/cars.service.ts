import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        { id: 1, brand: "Toyota", model: "Corola" },
        { id: 2, brand: "Honda", model: "Civic" },
        { id: 3, brand: "Honda", model: "Accord" },
    ];

    public getAll() {
        return this.cars
    }

    public getById(id: number) {
        const car =this.cars.find(c => c.id == id);        
        return car 
    }

}
