import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  getAllEmp(){
   return (this.http.get(`${this.baseUrl}getAllEmp`));
  }

  getEmpById(id:any){
    return (this.http.get(`${this.baseUrl}getparticularEmpById/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

  postEmpData(obj:any){
     return (this.http.post(`${this.baseUrl}addemp`,obj,{
        responseType:'text'
      }));
  }

  updateEmpData(obj:any){
     return (this.http.put(`${this.baseUrl}updateEmp/${obj.id}`,obj,{
        responseType:'text'
      }));
  }

  deleteData(id:any){
   return (this.http.delete(`${this.baseUrl}deleteemp/${id}`,{
      responseType:'text'
    }));
  }

}
