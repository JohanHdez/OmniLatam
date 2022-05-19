import { Injectable } from '@angular/core';
import { CarsMock } from '../../shared/mocks/cars.mock'
import { Car } from '../model/car.model';
 
@Injectable({ providedIn: 'root' })
export class CarsService {

constructor() {}
 
  getCars() {
    let promise = new Promise<Car[]>((resolve) => {
        setTimeout(()=>{
            resolve(CarsMock)
        },2000);
      });
    return promise;
  }

}
