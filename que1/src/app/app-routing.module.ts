import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { CombocomponentComponent } from './combocomponent/combocomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { CombotextcomponentComponent } from './combotextcomponent/combotextcomponent.component';
import { InputformcomponentComponent } from './inputformcomponent/inputformcomponent.component';

const routes: Routes = [
  {path : "data" , component : MycomponentComponent},
  {path : "combo" , component : CombocomponentComponent},
  {path : "list" , component : ListcomponentComponent},
  {path : "combo-text" , component : CombotextcomponentComponent},
  {path : "input-from" , component : InputformcomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
