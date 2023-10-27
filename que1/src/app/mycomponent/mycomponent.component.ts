import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  
  intData : number = 21;
  stringData : string = "My String Data";
  Date : Date = new Date("01-01-2023");
  
}
