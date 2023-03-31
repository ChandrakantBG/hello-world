import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string="success"
  rating:number=24;
  isError:boolean=false;
  isspecial:boolean=true;
  jsonobj={
  'success':!this.isError,
    'danger':this.isError,
    'special':this.isspecial

  }

  constructor() { }

  ngOnInit(): void {
  }

}
