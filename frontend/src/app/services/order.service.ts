import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModelServer } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = 'http://localhost:3000/api/v1/orders/order-cash';
  private paymentUrl = 'http://localhost:3000/api/v1/orders/signature/';
  private editUrl = 'http://localhost:3000/api/v1/orders/edit/quantities';
  constructor(private http: HttpClient) { }

  private cartSize = new BehaviorSubject('0');
  currentSize = this.cartSize.asObservable();
  private cartTotal = new BehaviorSubject(0);
  currentTotal = this.cartTotal.asObservable();
  private cartItems = new BehaviorSubject<ProductModelServer[]>([]);
  currentItems = this.cartItems.asObservable();

  changeSize(cartS: string) {
    this.cartSize.next(cartS);
    // console.log(cartS);
  }

  changeTotal(total: number) {
    this.cartTotal.next(total);
    // console.log(total);
  }

  changeItems(items: any[]) {
    this.cartItems.next(items);
  //  console.log(items);
  }
  // tslint:disable-next-line: typedef
  postOrder(order: any){
    return this.http.post<any>(this.orderUrl, order);
  }

  editOrder(items: any){
    return this.http.put<any>(this.editUrl,items);
  }

  // tslint:disable-next-line: typedef
  paymentSignature(details: any){
    return this.http.post<any>(this.paymentUrl, details);
  }
}
