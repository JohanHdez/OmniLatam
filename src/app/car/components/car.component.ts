import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { retrievedcarList } from 'src/app/state/cars.actions';
import { selectCars } from 'src/app/state/cars.selectors';
import { Car } from '../model/car.model';
import { CarsService } from '../service/cars.service';
import { CarDetailComponent } from './car-detail/car-detail.component';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  cars$ = this.store.select(selectCars);
  
  constructor(
    public dialog: MatDialog,
    private carsService: CarsService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.carsService.getCars().then((cars) => {
      this.store.dispatch(retrievedcarList( { cars: cars.sort((a, b) => a.brand < b.brand ? - 1 : Number(a.brand > b.brand)) }) )
    })
  }

  openDialog(value: Car) {
    this.dialog.open(CarDetailComponent, {
      data: value,
    });
  }

}
