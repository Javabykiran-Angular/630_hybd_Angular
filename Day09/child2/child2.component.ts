import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  @Output() childArrObjEvent=new EventEmitter();

  childStrdata="Hopes so u r enjoying This Module";

  arrProduct=[
    {
      name:"Iphone",
      price:150000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Realme",
      price:18000,
      qty:1
    },
    {
      name:"Vivo",
      price:12000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    }
  ]


  onSend(){
    this.childStrEvent.emit(this.childStrdata);
    this.childArrObjEvent.emit(this.arrProduct)
  }
}
