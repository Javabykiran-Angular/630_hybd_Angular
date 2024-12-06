import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empObj:any=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService
  ){}

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"))
      this.getDataFromBackend(param.get("id"));
    })
  }

  getDataFromBackend(id:any){
    this.service.getEmpById(id)
    .subscribe((response)=>{
      // console.log(response)
      this.empObj=response;
    })
  }


}
