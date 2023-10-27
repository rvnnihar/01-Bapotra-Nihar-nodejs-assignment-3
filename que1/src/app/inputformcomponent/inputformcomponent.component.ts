import { Component } from '@angular/core';
import { user } from '../models/user.model';

@Component({
  selector: 'app-inputformcomponent',
  templateUrl: './inputformcomponent.component.html',
  styleUrls: ['./inputformcomponent.component.css']
})
export class InputformcomponentComponent {
  user: user = {
    name: "",
    email : "",
    phone : "",
    gender :""
  };
  displayData : boolean = false;

  Onsubmit(){

    this.displayData = Object.values(this.user).every((val)=> val.trim() !=="" && val !== null)
    if(!this.displayData){
      alert("Fill all the fields");
    }
  }
}
