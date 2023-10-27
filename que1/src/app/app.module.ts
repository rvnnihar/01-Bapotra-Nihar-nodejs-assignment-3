import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { CombocomponentComponent } from './combocomponent/combocomponent.component';
import { CombotextcomponentComponent } from './combotextcomponent/combotextcomponent.component';
import { FormsModule } from '@angular/forms';
import { InputformcomponentComponent } from './inputformcomponent/inputformcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    ListcomponentComponent,
    CombocomponentComponent,
    CombotextcomponentComponent,
    InputformcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
