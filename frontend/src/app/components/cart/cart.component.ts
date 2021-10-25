import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/models/Product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;
  cartLength!: any;
  constructor(private msg: MessangerService, private order: OrderService ) { }

  ngOnInit(): void {
    this.cartItems = this.msg.getCartItems();
    // this.cartTotal = this.msg.getTotal();
    this.order.currentSize.subscribe((cartS) => {
      if (cartS === '0') {
        this.cartLength = this.cartItems.length;
      } else {
        this.cartLength = cartS;
      }
      console.log(cartS);
    });
    this.order.currentTotal.subscribe((cartT) => {
      if (cartT === 0) {
        this.cartTotal = this.msg.getTotal();
      } else {
        this.cartTotal = cartT;
      }
    });
    this.order.currentItems.subscribe((cartItems) => {
      if(cartItems.length === 0){
       this.cartItems = this.msg.getCartItems();
      }
      else
        this.cartItems = cartItems;
    });
  }



  // getPrice(i: number){
  //   if(isNaN(this.cartItems[i].quantity))
  //   {
  //     this.cartItems[i].quantity = 1;
  //   }
  //   return this.cartItems[i].price * this.cartItems[i].quantity;
  // }

  // addQuantity(i: number){
  //   return this.cartItems[i].quantity++;
  // }

  // reduceQuantity(i: number){
  //   return this.cartItems[i].quantity--;
  // }


  removeCartItem(i: number){
    this.cartItems.splice(i,1);
    this.order.changeItems(this.cartItems);
    this.msg.updateCartItems(this.cartItems);
    // this.cartLength = this.cartItems.length;
    // this.cartTotal = this.msg.getTotal();
  }
}
