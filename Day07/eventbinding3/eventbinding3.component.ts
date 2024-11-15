import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  onChange(username:string){
    if(username.length>5){
    alert("Ur character Limit is Exceed...")
    }else{
      console.log("Change Event Occur..")
    }
  }
}
