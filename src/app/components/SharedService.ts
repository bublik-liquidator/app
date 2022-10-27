import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { CarData } from "./car-data";

@Injectable()
export class SharedService  {

  // mySubject = new Subject();
  //! car: CarData!!!
  newCar = new CarData(); 
  getData(car:CarData){    
    //проблема:я вызываю функцию которая принимает значения из родительского компонета и как передать их в дочерний
    // в getData передается масив с машиной из родительского компонета (массив car типа CarData)
    //при вызове функция будет возвращать масив car типа CarData
    //!return car;
    //но если я буду вызывать функцию getData из дочепрнего компонента для получения масива car типа CarData
    //надо будет что-то передовать функции тк она принимает одно значение, а что ей передать если я на оборот хочу получить
    //Нашёл решение:в сервисе создать масив CAR типа CarData куда будет записываться масив car типа CarData из родительского компонета
     this.newCar = car;
  }
  addData(){     
     return this.newCar;
  }
}