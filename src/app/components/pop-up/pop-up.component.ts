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
  id:string; 
  name:string; 
  speed:string; 
  public InitCarPopUP() {        
    this.newCar = this.sharedService.addData();
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
    this.id=this.newCar.id;
    this.name=this.newCar.name;
    this.speed=this.newCar.speed;
  }
  saveCarsToStorage(){
    for(let i=0;i<this.cars.length;i++){
      if(this.cars[i].id==this.newCar.id){  
        // this.cars[i].name = this.newCar.name;
        // this.cars[i].speed = this.newCar.speed;
        this.cars[i] = this.newCar;
        localStorage.setItem('cars', JSON.stringify(this.cars));
      }
    }  
    // this.cars = this.cars.filter((obj) => obj.id == );
    // localStorage.setItem('cars', JSON.stringify(this.cars));
  }
  Cale(){
    // for(let i=0;i<this.cars.length;i++){
    //   if(CAR.id==this.cars[i].id){
        // CAR=this.cars[i];      
        console.log("ДО .name: " + this.name);  
         this.name=this.newCar.name;
         this.speed=this.newCar.speed;
         console.log(" ПОСЛЕ name: " + this.name);
         console.log(" ПОСЛЕ this.newCar.name: " + this.newCar.name);
        //!this.newCar=this.cars[i];

        //!! крч проблема в том что оно почнемуто созраняет в сервис 

        // console.log("newCar.name: " + this.name);
        // console.log("newCar.speed: " + this.newCar.speed);
        // console.log("this.cars[i]: " + this.cars[i]);
        // console.log(" this.cars[i].name: "+this.cars[i].name);
        // console.log(" this.cars[i].speed: " + this.cars[i].speed);
        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA ");

      }
    
  }

   

