import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CarData } from './car-data';

@Injectable()
export class SharedService {
  car = new CarData();
  cars: CarData[] = [];
  editedCar = new CarData(); 
  
  initCar(car: CarData) {
    this.car = car;
  }
  getCar(): CarData {
    return this.car;
  }
  editCar(car: CarData) {
    CarData.copyFieldsValuesTo(car, this.car);
  }

  getAll() {
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
    return this.cars;
  }
  getById(id: string) {
    if (localStorage.getItem('cars') !== null) {
      this.getAll();
      // this.getAll().find(this.car -> this.car.id == id);
      // this.NewCar = this.cars.find(({ id }) => id === id);]
      console.log('ALLL ' + this.getAll().find(({ id }) => id === id));
      return this.getAll().find(({ id }) => id === id);
    }
    return 0;
  }
  create(Car: CarData) {
    Car.id = Math.floor(Math.random() * 100).toString();
    this.cars.push(Car);
    console.log('new car saved' + Car);
    this.save();
    return Car;
  }
  save() {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }
  // update(car: CarData) {
  //   localStorage.setItem('cars', JSON.stringify(this.cars));
  // не понял что сюда пихать 
  // есть метод Cale и Save в pop-up component, их?
  // }
  delete(id: string) {
    this.cars = this.cars.filter((obj) => obj.id != id);
    console.log('deleted car with id=' + id);
    this.save();
  }
}
