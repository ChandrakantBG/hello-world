import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe2',
  templateUrl: './custompipe2.component.html',
  styleUrls: ['./custompipe2.component.css']
})
export class Custompipe2Component implements OnInit {
  strddatapipe2:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis a, rem consequuntur libero eaque blanditiis provident suscipit aperiam deserunt assumenda non eveniet? Qui, reiciendis dignissimos libero iste ut reprehenderit sequi!'

  constructor() { }

  ngOnInit(): void {
  }

}
