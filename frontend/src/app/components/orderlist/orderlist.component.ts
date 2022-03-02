import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private orderService: OrderService,private router: Router) { }
  orderID : any

  public order : any[] = []

  ngOnInit(): void {
    this.getOrders()
  };

  getOrders(){
    this.orderService.getOrders().subscribe((res)=> {
      this.order = res;
      console.log(this.order);
    })
  }

  convertDate(date: String){
    return date.substring(0,10);
  }


  saveID(id: String){
    this.orderID = id;
    localStorage.setItem('orderID',this.orderID);
    console.log(this.orderID);
  }

}
