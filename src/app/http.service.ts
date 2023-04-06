import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string="http://jsonplaceholder.typicode.com/posts";

  constructor(private myhttp:HttpClient) { }
  getpost(){
    return (this.myhttp.get(this.url));
  }
  postdata(obj:any){
    return (this.myhttp.post(this.url,obj));
  }
  updatedata(obj:any){
    return (this.myhttp.put(`${this.url}/${obj.id}`,obj))
  }
  deletedata(id:any){
return (this.myhttp.delete(`${this.url}/${id}`))
  }
  
}
