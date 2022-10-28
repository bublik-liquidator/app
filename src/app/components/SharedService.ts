import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { CarData } from "./car-data";

@Injectable()
export class SharedService  {

  car = new CarData(); 
  initCar(car:CarData){    

     this.car = car;

  }
  getCar(): CarData {     
     return this.car;
  }
  editCar(car:CarData){  
    CarData.copyFieldsValuesTo(car, this.car);

  }
}