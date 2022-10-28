import { Component, OnInit, Input } from '@angular/core';
import { CarData } from '../car-data';
import { SharedService } from '../SharedService';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.car = this.sharedService.getCar();
    CarData.copyFieldsValuesTo(this.car, this.editedCar);
  }

  car = new CarData(); // оригинальная машина
  editedCar = new CarData(); // это редактируем


  saveCarsToStorage() {
    console.log(this.car instanceof CarData);
    CarData.copyFieldsValuesTo(this.editedCar, this.car);
    this.sharedService.initCar(this.editedCar);
    console.log('edited:' + this.editedCar.name);
  }
  Cale() {    
    this.editedCar.name = this.car.name;
    this.editedCar.speed = this.car.speed;
    //!this.newCar=this.cars[i];
  }
}
