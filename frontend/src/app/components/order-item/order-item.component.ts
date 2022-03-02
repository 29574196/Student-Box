import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  public orderItem : any;
  orderID : any

  ngOnInit(): void {
    this.getOrder();
    
  }

  getOrder(){
    this.getID();
    this.orderService.getSingleOrder(this.orderID).subscribe((res)=> {
      this.orderItem = res;
      console.log(this.orderItem);
    })
  }

  getID(){
    this.orderID = localStorage.getItem('orderID');
    
  }

  getData(items: any){
    let value : any;
    value = items;
    console.log(value);
    
  }

}
