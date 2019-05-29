import{DynamicComponentService} from './DynamicComponentService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ComponentAComponent} from './ComponentAComponent';
import{ComponentBComponent} from './ComponentBComponent';
import {DynamicComponentDirective} from './DynamicComponentDirective';
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
