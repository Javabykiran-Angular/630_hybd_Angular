export interface Employee{
    id:number,
    name:string,
    mobileno:string,
    emailid:string,
    salary:number,
    department:string,
    status:string,
    createdBy:string,
    ceratedDate:Date,
    updatedBy:string,
    updatedDate:Date,
    country:{
        cid:number,
        cname:string
    }

}