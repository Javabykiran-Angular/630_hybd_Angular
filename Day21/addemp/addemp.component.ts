import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit{

  addData:any=<Employee>{};
  allCountry:any[]=[];
  isUpdated:boolean=false;

  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.getAllCountryFromBackend();
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"));
      this.isUpdated=true;
      this.getEmpByIDFromBackend(param.get("id"));
    })
  }

  getEmpByIDFromBackend(id:any){
      this.service.getEmpById(id)
      .subscribe((response:any)=>{
        // console.log(response);
        this.addData=response;

      });
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response)
      this.allCountry=response;
    });
  }

  onSubmit(){      
    if(this.isUpdated){
      // Update the Record
      this.addData.updatedBy="Sumit";
      this.addData.updatedDate=Date.now();
      this.service.updateEmpData(this.addData)
      .subscribe((response:any)=>{
        // console.log(response);
        this.router.navigate(['']);
      });
      

    }else{
      //Add the Record
      this.addData.createdBy="Sumit";
      this.addData.createdDate=Date.now();
      this.addData.updatedBy="Sumit";
      this.addData.updatedDate=Date.now();
      console.log(this.addData);  
      this.service.postEmpData(this.addData)
      .subscribe((response)=>{
        // console.log(response);
        this.router.navigate(['']);
      })

    }    

  }

}
