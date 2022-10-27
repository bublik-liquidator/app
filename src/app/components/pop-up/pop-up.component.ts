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
  name : string; 
  cars: CarData[] = [];

  public InitCarPopUP() {        
    this.name = this.sharedService.addData();
    this.cars = JSON.parse(localStorage.getItem('cars') || '[]');
  }


   
}
