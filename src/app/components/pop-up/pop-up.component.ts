import { Component, OnInit,Input } from '@angular/core';
import { CarData } from '../car-data';
import { SharedService } from '../SharedService';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent
{ 
  constructor(private sharedService: SharedService){}
  ngOnInit(): void {
    this.InitCarPopUP();
   }
 
  newCar = new CarData(); 
  cars: CarData[] = [];

  public InitCarPopUP() {        
    this.newCar = this.sharedService.addData();
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
  }
  saveCarsToStorage(){
    for(let i=0;i<this.cars.length;i++){
      if(this.cars[i].id==this.newCar.id){
        console.log ("AAA"+this.cars[i].id)        
        this.cars[i].name = this.newCar.name;
        this.cars[i].speed = this.newCar.speed;
        localStorage.setItem('cars', JSON.stringify(this.cars));
      }
    }  
    // this.cars = this.cars.filter((obj) => obj.id == );
    // localStorage.setItem('cars', JSON.stringify(this.cars));
  }
  Cale(CAR:CarData){
    for(let i=0;i<this.cars.length;i++){
      if(CAR.id==this.cars[i].id){
        // CAR=this.cars[i];        
        this.newCar.name=this.cars[i].name;
        this.newCar.speed=this.cars[i].speed;

      }
    }  
  }

   
}
