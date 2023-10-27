import { Component } from '@angular/core';

@Component({
  selector: 'app-combocomponent',
  templateUrl: './combocomponent.component.html',
  styleUrls: ['./combocomponent.component.css']
})
export class CombocomponentComponent {
  ComboArray : Array<string> = ["Combo item 1","Combo item 2","Combo item 3","Combo item 4","Combo item 5"];
}
