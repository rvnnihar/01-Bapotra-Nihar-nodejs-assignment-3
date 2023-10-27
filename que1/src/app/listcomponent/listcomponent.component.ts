import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent {
  listArray : Array<string> = ["list item 1","list item 2","list item 3","list item 4","list item 5"];
}
