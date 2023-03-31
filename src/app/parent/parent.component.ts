import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  strdata:string='parent data send';
  jsonobj={
    id:1,
    fname:'chandrakant',
    role:'devops'
  }
  arrdata=[
    {
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
  strdatareceived:string='';
  jsonobjreceved:any={};
  // jsonobjreceved(jsonobj:any){
  //   this.jsonobjreceved=jsonobj
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
