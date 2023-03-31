import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  // count:number=0;
  count:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    if(this.count){
      console.log("click event occure");
      //this.count++;
       this.count=false;
    }
   

  }
  onimage(){
      console.log("on click image click event...")
  }
  ondollerevent(myevent:any){
      console.log(myevent);
      console.log(myevent.target.value);
  }

}
