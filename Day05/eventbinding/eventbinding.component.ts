import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  isClick:boolean=true;

  onClick(){
    if(this.isClick){
      console.log("Click Event Occur....");
      this.isClick=false;
    }
    
  }

  onImageClick(){
    console.log("Image click...")
  }
  

}
