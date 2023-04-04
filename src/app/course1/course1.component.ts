import { Component, OnInit } from '@angular/core';
import { course1service } from '../utility/course1.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {
  mycourse:string[]=[];

  constructor(private service:course1service) {
   // let service = new course1service();
    

   }

  ngOnInit(): void {
    this.mycourse=this.service.getcourse();
  }

}
