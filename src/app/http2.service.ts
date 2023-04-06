import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Http2Service {
  url:string="http://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  getpost(){
   return this.http.get(this.url);
  }
postdata(obj:any){
  return (this.http.post(this.url,obj))
}
updatedata(obj:any){
return (this.http.put(`${this.url}/${obj.id}`,obj))
}
deletedata(id:any){
  return (this.http.delete(`${this.url}/${id}`))
}
}
