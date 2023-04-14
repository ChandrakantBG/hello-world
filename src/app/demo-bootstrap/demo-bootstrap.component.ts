import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {
  arrproduct=[
    {
      name:'redmi',
      price:30000,
      qty:1
    },
    {
      name:'motrola',
      price:35000,
      qty:1
    },
    {
      name:'sumsung',
      price:40000,
      qty:1
    },
    {
      name:'realmme',
      price:20000,
      qty:1
    },
    {
      name:'oneplus',
      price:50000,
      qty:1
    },
    {
      name:'apple',
      price:75000,
      qty:1
    },
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
