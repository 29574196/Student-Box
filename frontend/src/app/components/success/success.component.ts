import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  orderList:any[]=[];
  name = localStorage.getItem('name')|| '';

  constructor() { }

  ngOnInit(): void {
    
    this.orderList = this.getCartData();
    
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('order')|| '');
  }

}
