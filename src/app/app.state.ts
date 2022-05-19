import { Car } from "./car/model/car.model";



export interface AppState {
  cars: ReadonlyArray<Car>;
  collection: ReadonlyArray<number>;
}