import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  itemInCart!: Number;
  constructor(private cartService: CartService, public router: Router){}

  ngOnInit(){
    this.cartService.cartItems.subscribe(d=> {
      this.itemInCart = d.length;
    })
  }
}
