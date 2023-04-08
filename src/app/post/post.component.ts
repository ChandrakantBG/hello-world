import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any[]=[];
  id!:number;
  title:string='';
  body:string='';
  ishidden:boolean=true;


  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.Getpost();
  }
Getpost(){
  this.service.getpost()
  .subscribe((response:any)=>{
    console.log(response);
    this.post=response;
  },((myerror)=>{
    alert('error is occure')
  }))
}
onsend(inputttile:any,inputbody:any){
let obj={
  title:inputttile,
  body:inputbody
}
this.service.postdata(obj).subscribe((response)=>{
  console.log(response);
})
}

onedit(item:any){
  console.log(item);
  this.id=item.id ;
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
