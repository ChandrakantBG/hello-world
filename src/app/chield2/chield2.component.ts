import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chield2',
  templateUrl: './chield2.component.html',
  styleUrls: ['./chield2.component.css']
})
export class Chield2Component implements OnInit {
  @Output() childstrevent= new EventEmitter();
  @Output() childarrobjevent= new EventEmitter();
  @Output() childdataevent= new EventEmitter();
  jsondata:any={
    id:1,
    fname:'chandrakant',
    role:'devops'
  }
  
strdata:string='data send to parrent...';
arrdata:any[]=[];
arrproduct=[{
  product:'micromax',
  prize:20000,
  qty:1
},
{
  product:'redmi',
  prize:15000,
  qty:1
},
{
  product:'sumsung',
  prize:30000,
  qty:1
},
{
  product:'oppo',
  prize:25000,
  qty:1
}


]
  constructor() { }

  ngOnInit(): void {
  }
  onsend(){
    this.childstrevent.emit(this.strdata);
    this.childarrobjevent.emit(this.arrproduct);
    this.childdataevent.emit(this.jsondata);
  }
 

}
