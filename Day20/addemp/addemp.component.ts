import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit{

  addData:any=<Employee>{};
  allCountry:any[]=[];

  constructor(private service:HttpService){}
  ngOnInit(): void {
    this.getAllCountryFromBackend();
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      console.log(response)
      this.allCountry=response;
    });
  }

  onSubmit(){    
    this.addData.createdBy="Sumit";
    this.addData.createdDate=Date.now();
    this.addData.updatedBy="Sumit";
    this.addData.updatedDate=Date.now();

    console.log(this.addData);
  }

}
