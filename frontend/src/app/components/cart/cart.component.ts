import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/models/Product';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;
  cartLength!: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartItems = this.msg.getCartItems();
    // // this.cartTotal = this.msg.getTotal();
    // this.order.currentSize.subscribe((cartS) => {
    //   if (cartS === '0') {
    //     this.cartLength = this.cartItems.length;
    //   } else {
    //     this.cartLength = cartS;
    //   }
    //   console.log(cartS);
    // });
    // this.order.currentTotal.subscribe((cartT) => {
    //   if (cartT === 0) {
    //     this.cartTotal = this.msg.getTotal();
    //   } else {
    //     this.cartTotal = cartT;
    //   }
    // });
    // this.order.currentItems.subscribe((cartItems) => {
    //   if(cartItems.length === 0){
    //    this.cartItems = this.msg.getCartItems();
    //   }
    //   else
    //     this.cartItems = cartItems;
    // });

    this.cartService.cartItems.subscribe(data=> {
      this.cartItems = data;

      if(this.cartItems){
        this.getTotal(this.cartItems);
      }
    });
  }



  // getPrice(i: number){
  //   if(isNaN(this.cartItems[i].quantity))
  //   {
  //     this.cartItems[i].quantity = 1;
  //   }
  //   return this.cartItems[i].price * this.cartItems[i].quantity;
  // }

  addQuantity(i: number){
    return this.cartItems[i].quantity++;
    
  }

  reduceQuantity(i: number){
    return this.cartItems[i].quantity--;
  }


  removeCartItem(i: number){
    this.cartItems.splice(i,1);
    this.cartService.setCartData(this.cartItems);
    this.getTotal(this.cartItems);
  }

  validateInput(event:any,i:number){
    const qty = +event.target.value;
    if(qty< 1){
      event.target.value = this.cartItems[i].quantity;
      return;
    }
    this.QtyUpdated(qty,i);

  }

  

  private QtyUpdated(qty:number,i:number){
    this.cartItems[i].quantity = qty;
    this.cartService.setCartData(this.cartItems);
    this.getTotal(this.cartItems);
  }

  getTotal(data:any){
    let subs = 0;

    for(const item of data){
      subs += item.price * item.quantity
    }
    this.cartTotal = subs;
    console.log(this.cartTotal);
  }
}
