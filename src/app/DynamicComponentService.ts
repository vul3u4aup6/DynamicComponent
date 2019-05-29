import{ComponentAComponent} from './ComponentAComponent';
import{ComponentBComponent} from './ComponentBComponent';
import { Injectable } from '@angular/core';
@Injectable()
export class DynamicComponentService {
  private components = {
    componentA: ComponentAComponent,
    componentB: ComponentBComponent
  }
  constructor() { }

  getComponent(componentName) {
    return this.components[componentName];
  }
}