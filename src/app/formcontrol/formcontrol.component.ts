import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {
  country:any[]=[{
    cid:1, name:'India'
  },
  {
    cid:1, name:'america'
  },
  {
    cid:1, name:'japan'
  }
];

Email_pattern="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor() { }

  ngOnInit(): void {
  }
onsubmit(f:NgForm){
console.log("usernamne "+f.value.myusername);
console.log("usernamne "+f.value.con);
console.log("usernamne "+f.value.comment);
console.log("usernamne "+f.value.country.name);
}
}
