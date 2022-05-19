import { createAction, props } from '@ngrx/store';
import { Car } from '../car/model/car.model';
 
export const retrievedcarList = createAction(
  '[car List/API]  Success',
  props<{ cars: ReadonlyArray<Car> }>()
);