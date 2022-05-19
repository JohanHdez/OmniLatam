import { createReducer, on } from '@ngrx/store';
import { Car } from '../car/model/car.model';

import { retrievedcarList } from './cars.actions';

export const initialState: ReadonlyArray<Car> = [];

export const carsReducer = createReducer(
  initialState,
  on(retrievedcarList, (state, { cars }) => cars)
);