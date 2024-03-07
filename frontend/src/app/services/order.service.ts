import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModelServer } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = 'https://student-box-api.site/api/v1/orders/orders';
  private ordersUrl = 'https://student-box-api.site/api/v1/orders/orders';
  
  private editUrl = 'https://student-box-api.site/api/v1/orders/edit/quantities';
  private quantityUrl = 'https://student-box-api.site/api/v1/orders/quantities';
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

  getQuantities(){
    return this.http.get<any[]>(this.quantityUrl);
  }

  getOrders(){
    return this.http.get<any[]>(this.ordersUrl);
  }

  getSingleOrder(id: String){
    console.log(id);
    return this.http.get<any>(this.orderUrl + '/' + id)
  }

}
