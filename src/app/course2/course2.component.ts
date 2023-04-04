import { Component, OnInit } from '@angular/core';
import { courseservices2 } from '../utility/course2.service';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.css']
})
export class Course2Component implements OnInit {
  mycourse:string[]=[];

  constructor(private service:courseservices2) {
   //let service=new courseservices2();
   
   }

  ngOnInit(): void {
    this.mycourse=this.service.getcourseservice();
  }

}
