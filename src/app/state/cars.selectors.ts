import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Car } from '../car/model/car.model';

export const selectCars = createFeatureSelector<ReadonlyArray<Car>>('cars');
