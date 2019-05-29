import{DynamicComponentService} from '../service/DynamicComponentService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ComponentAComponent} from './component/ComponentAComponent';
import{ComponentBComponent} from './component/ComponentBComponent';
import {DynamicComponentDirective} from './directive/DynamicComponentDirective';
import{AngularDraggableModule} from 'angular2-draggable';
@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDraggableModule
  ],
  entryComponents: [
    ComponentAComponent,
    ComponentBComponent
  ],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
