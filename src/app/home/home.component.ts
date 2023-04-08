import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myid:number=9;
  myusername:string='chandrakant-ghorpade';
  myjson={
    id:8,
    fname:'chandrakant',
    lname:'ghorpade'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onpage1(){
 this.router.navigate(['/page1']);
  }

  onpage2(){
    this.router.navigate(['/page2',this.myid]);
  }

  onpage3(){
    this.router.navigate(['/page3',this.myid,this.myusername]);
  }

  onfollower(){
    this.router.navigate(['/follower']);
  }

  onquery(){
    this.router.navigate(['/queryparameter'],{queryParams:this.myjson});
  }

}
