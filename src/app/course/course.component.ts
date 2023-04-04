import { Component, OnInit } from '@angular/core';
import { couresservice } from '../utility/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  mycourse:string[]=[];
  constructor(private service:couresservice) {

    //let service = new couresservice();
    
   }

  ngOnInit(): void {
    this.mycourse=this.service.getcourse();
  }

}
