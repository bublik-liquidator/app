
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarData } from '../car-data';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { SharedService } from '../SharedService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  cars: CarData[] = [];
  newCar = new CarData(); 
  isEdit: boolean = false;
  constructor(private matdialog:MatDialog,private sharedService: SharedService) {    
  }

  
  EditCar(car:CarData){
    this.matdialog.open(PopUpComponent);
    this.sharedService.getData(car);
  }
  
  ngOnInit(): void {
    this.initCars();
  }

  initCars() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
  }

  AddButtonCar() {
    this.isEdit = !this.isEdit;
  }

  AddCar() {
    this.addNewCar(this.newCar);
  } 

  deleteCar(id: string) {
    this.cars = this.cars.filter((obj) => obj.id != id);
    console.log('deleted car with id=' + id);
    this.saveCarsToStorage();
  }

  saveCarsToStorage() {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  addNewCar(car: CarData) {
    car.id = Math.floor(Math.random() * 100).toString();

    this.cars.push(car);
    console.log('new car saved');

    this.newCar = new CarData();
    this.saveCarsToStorage();
  }

}
