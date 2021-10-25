import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModelServer } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder: any[] = [];
  cartItems = new BehaviorSubject<ProductModelServer[]>([]);

  

  constructor() { 
    const ls = this.getCartData();
    if(ls){
      this.cartItems.next(ls)
    }
  }

  addItem(product: ProductModelServer){
    const ls = this.getCartData()
    let exist;

    if(ls){
      exist = ls.find((item:any)=> {
        return item._id === product._id;
      });
    }
    
    if(exist){
      exist.quantity++;
      this.setCartData(ls)
    }
    else{
      if(ls){
        const newData = [...ls,product];
        this.setCartData(newData)
        this.cartItems.next(this.getCartData())
      }
      else{
        this.placeholder.push(product);
        this.setCartData(this.placeholder)
        this.cartItems.next(this.placeholder);
      }
    }
  }

  setCartData(data: any){
    localStorage.setItem('cart',JSON.stringify(data));
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('cart')|| '0');
  }
}
