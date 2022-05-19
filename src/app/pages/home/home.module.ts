import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CarComponent } from 'src/app/car/components/car.component';
import { CarDetailComponent } from 'src/app/car/components/car-detail/car-detail.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from 'src/app/state/cars.reducer';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    CarComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    StoreModule.forRoot({ cars: carsReducer })
  ]
})
export class HomeModule { }