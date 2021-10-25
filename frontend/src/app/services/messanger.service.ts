import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModelServer } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
  // subject = new Subject();
  // items: ProductModelServer[] | undefined;
  // cartItems = [];
  // cartTotal = 0;

  // constructor() { }

  // // tslint:disable-next-line: typedef
  // sendMsg(product: unknown) {
  //   // We want to send the product item itself when the add to cart button is clicked..
  //   let tempProduct = [];
  //   if (localStorage.getItem('cart')){
  //     tempProduct = JSON.parse(localStorage.getItem('cart')|| '{}');
  //     tempProduct.push(product);
  //     this.items = tempProduct;
  //     //console.log('hey   ' + tempProduct);
  //   }else{
  //     tempProduct = [product];
  //   }
  //   localStorage.setItem('cart', JSON.stringify(tempProduct));
  //   this.items = tempProduct;
  //   //console.log(product);
  //  // console.log(this.items);
  //   // localStorage.setItem('cart',product)
  //   this.subject.next(product); // Triggering an event
  // }

  // // tslint:disable-next-line: typedef
  // getMsg() {
  //   // tslint:disable-next-line: max-line-length
  //   // The product collected by the sendMsg() is retrieved in this function and will be sent to the cart component as a new product added to the cart list.

  //   return this.subject.asObservable();
  // }

  // // tslint:disable-next-line: typedef
  // getCartItems(){
  //   const items = JSON.parse(localStorage.getItem('cart')|| '{}');
  //   this.cartTotal = 0;
  //   const cartItems: any[] = [];
  //   items.forEach((element: any) => {
  //     cartItems.push(element);
  //   });

  //   cartItems.forEach(item => {
  //     this.cartTotal +=  item.price;

  //   });
  //   return  cartItems;
  // }

  // updateCartItems(cartItems: any){
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  // }

  // // tslint:disable-next-line: typedef
  // getTotal()
  // {
  //   return this.cartTotal;
  // }
}
