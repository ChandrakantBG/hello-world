import { Component, OnInit } from '@angular/core';
import { Http2Service } from '../http2.service';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {
  post:any[]= [];
  id!:number;
  title:string='';
  body:string='';
  ishidden:boolean=true;

  constructor(private service:Http2Service) { }

  ngOnInit(): void {
    this.Getpost();
  }
Getpost(){
  this.service.getpost().subscribe((responce:any)=>{
    console.log(responce);
    this.post=responce;
  });

}

onsend(inputtitle:any,inputbody:any){
let obj={
  title:inputtitle,
  body:inputbody
}

this.service.postdata(obj)
.subscribe((respons)=>{
  console.log(respons)
},((myerror)=>{
  alert('error is occure');
}))
}
onedit(item:any){
console.log(item);
this.id=item.id;
this.title=item.title;
this.body=item.body;
this.ishidden=false;
}
onupdate(){
  let obj={
    id:this.id,
    title:this.title,
    body:this.body
}
this.service.updatedata(obj).subscribe((response)=>{
  console.log(response);
  this.ishidden=true;
})
}
ondelete(id:any){
this.service.deletedata(id)
.subscribe((response)=>{
  console.log(response);
})
}
}
