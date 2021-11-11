import { OrderService } from 'src/app/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prims',
  templateUrl: './prims.component.html',
  styleUrls: ['./prims.component.css']
})
export class PrimsComponent implements OnInit {

  constructor(private router: Router,private orderService: OrderService) { }

  public product: any[] = [];

  ngOnInit(): void {
    this.getQuantities();
    console.log(this.product)
  }

  getQuantities(){
    this.orderService.getQuantities().subscribe((data)=> {
      // this.product = data;
      console.log(data);
      this.product.push(data)
    })
  }

}
