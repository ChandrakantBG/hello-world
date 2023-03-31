import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  onsend(mydata:any){
    console.log(mydata)
    console.log("data is: "+mydata.value);
    mydata.style.background="green";
    mydata.style.color="white";
  }
onsend1(myvalue:string){
  console.log(myvalue);
}
onaddition(num1:any,num2:any){
let n1=+num1;
let n2=+num2;
//this.result=num1+num2;
this.result=n1+n2;
}
onchange(myvalue:any){
  console.log("change event occure")
  console.log("=>"+myvalue);
  if (myvalue.length>10)
 {
    alert("password lenght should be 10 ...")
  }
}
}
