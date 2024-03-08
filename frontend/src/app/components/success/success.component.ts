import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  orderList:any[]=[];
  name = localStorage.getItem('name')|| '';
  public ID: any;
  public orderItem: any;

  constructor(private activatedRoute: ActivatedRoute,private orderService: OrderService) { }

  ngOnInit(): void {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id')
    this.getOrder(this.ID)
    this.orderList = this.getCartData();
    console.log(this.orderList)
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('order')|| '');
  }

  getOrder(id: any){
    this.orderService.getSingleOrder(id).subscribe((res)=> {
      this.orderItem = res;
    })
  }

}
