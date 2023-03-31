import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  name:string='Chandrakant Ghorpade';
  num:number=5;
  imgurl:string='../../assets/family.JPG'

  constructor() { }

  ngOnInit(): void {
  }

}
