import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import  {  v4 as uuid} from 'uuid'

@Injectable()
export class CarsService {

    private cars :Car[]= [
        { id:uuid() , brand: "Toyota", model: "Corola" },
        { id: uuid(), brand: "Honda", model: "Civic" },
        { id: uuid(), brand: "Honda", model: "Accord" },
    ];

    public getAll() {
        return this.cars
    }

    public getById(id: string) {
        const car =this.cars.find(c => c.id == id);        
        return car 
    }

}
