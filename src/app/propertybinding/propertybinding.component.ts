import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  name:string="Chandrakant Ghorpade";
  imgurl:string='../../assets/family.JPG'
  ishidden:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
