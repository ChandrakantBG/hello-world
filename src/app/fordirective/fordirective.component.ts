import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {
  course:string[]=['core java','advance java','spring boot','hibernate','jsp','angular 12','jenking','docker'];

  arrproduct=[
    {
      name:'redmi',
      price:30000,
      qty:1
    },
    {
      name:'motrola',
      price:35000,
      qty:1
    },
    {
      name:'sumsung',
      price:40000,
      qty:1
    },
    {
      name:'realmme',
      price:20000,
      qty:1
    },
    {
      name:'oneplus',
      price:50000,
      qty:1
    },
    {
      name:'apple',
      price:75000,
      qty:1
    },
    
    
  ]
  selected:string='';
  constructor() { }

  ngOnInit(): void {
  }
  onmouseover(data:any){
    console.log("mouseover event occure...")
    this.selected=data.name;
  }
onmouseout(){
  this.selected='';
}
}
