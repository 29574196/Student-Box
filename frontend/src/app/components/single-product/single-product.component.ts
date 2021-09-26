import { OrderService } from './../../services/order.service';
import { MessangerService } from './../../services/messanger.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private prodcutService: ProductsService,
    private msg: MessangerService,
    private orderService: OrderService
  ) {}

  products: ProductModelServer[] = [];
  public product: any;

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;


  cartLength!: number;
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.prodcutService.getSingleBook('5faa5c75f965ba16b035509c').subscribe((productList: ProductModelServer)=> {
      this.product= productList
      console.log(this.product);
    })
  }

  handleAddToCart(){
    this.msg.sendMsg(this.product);

    this.toast.success(`${this.product.title} added to the cart.`, 'Item Added', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
  }

  updateCart(){
    this.orderService.changeSize(''+this.msg.getCartItems().length);
    console.log(this.msg.getCartItems().length);
  }

}
