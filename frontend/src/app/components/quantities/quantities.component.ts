import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantities',
  templateUrl: './quantities.component.html',
  styleUrls: ['./quantities.component.css']
})
export class QuantitiesComponent implements OnInit {

  quantityData= {
    qua_id: '',
    mangoes: 0,
    strawberries: 0,
    apples: 0,
    bananas: 0,
    peppers: 0,
    cucumber: 0,
    potatoes: 0,
    sweet_potatoes: 0,
    cabbage: 0,
    mushrooms: 0,
    carrots: 0,
    onions: 0,
    tomatoes: 0,
    lettuce: 0,
    spinach: 0,

  }

  quantities: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  editPost(){
    this.quantityData.qua_id = '60a384c3fbf8932984492027';
    this.orderService.editOrder(this.quantityData).subscribe((data) => {
      this.quantities = data;
      // console.log(this.quantities);
    })
  }



}
