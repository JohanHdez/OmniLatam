import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})



export class CarDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Car
  ) {}

  ngOnInit() {
  }

}

