import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-component-a',
  template: "<div ngDraggable  class=resizable-widget><label  [style.color]=color [style.fontSize.px]=inputValue>123</label></div>",
})
export class ComponentAComponent implements OnInit {
  @Input() inputValue: number;
  @Input() color: any;
  
  constructor() { }

  ngOnInit() {
  }

}