import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

    strData:string="U r send Data from parent To Child...";

    jsonObj={
      id:9,
      name:'Sumit',
      lname:'Raokhande'
    }


}
