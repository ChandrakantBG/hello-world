import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }
  onkeyup(){
    console.log("key up event occur...")
  }
  onkeydown(){
console.log("key down event occure...")
  }

}
