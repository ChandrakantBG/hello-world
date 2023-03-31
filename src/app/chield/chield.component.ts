import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent implements OnInit {
  @Input() parentstrdata:string='';
  @Input() jsondata:any={};
  @Input() arrobjdata:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
