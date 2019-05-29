import { Component,ViewChild,ComponentFactoryResolver,Input,ViewContainerRef,ComponentRef } from '@angular/core';
import { DynamicComponentDirective } from './DynamicComponentDirective';
import { DynamicComponentService } from './DynamicComponentService';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;
  selectedComponentName: string;
  @Input() inputValue: any;
  @Input() color: any;
  item:any;

  private componentRef:ComponentRef<any>;
  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName));

    const viewContainerRef = this.componentHost.viewContainerRef;

    //viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.inputValue=this.inputValue;
    this.componentRef.instance.color=this.color;
    
  }
}
