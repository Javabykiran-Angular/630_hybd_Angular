import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {
    result:number=0;
    name!:string;
    
  onSend(name:any){
    console.log(name);
    console.log(name.value)
    name.style.background="green";
    name.style.color="white"
  }

  onSend1(myname:string){
    console.log(myname);    
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;

  }


}
