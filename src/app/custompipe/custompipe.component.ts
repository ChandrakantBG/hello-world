import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  strdatapipe:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus veritatis autem voluptatum aspernatur eos minus impedit dolorum quasi doloribus similique? Nam iste cumque qui iure vero ipsam amet natus assumenda.'

  constructor() { }

  ngOnInit(): void {
  }

}
