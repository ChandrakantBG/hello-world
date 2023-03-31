import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
mycolor:string='red';
rating:number=5;
setimg:string="../../assets/family.JPG"
jsonobj={
  color:'blue',
  fontFamily:'Arial, Helvetica, sans-serif',
  "font-size":'32px'
}
  constructor() { }

  ngOnInit(): void {
  }

}
