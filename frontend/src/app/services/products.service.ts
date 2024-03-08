import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModelServer } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  SERVER_URL = 'https://student-box-api.site/api/v1/products';

  constructor(private router: Router, private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAllBooks() : Observable<ProductModelServer[]>{
    return this.http.get<ProductModelServer[]>(`${environment.url}products`);
  }

  getSingleBook(id: String): Observable<ProductModelServer>{
    console.log(id);
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/' + id);
  }
}
