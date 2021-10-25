import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-essentails',
  templateUrl: './essentails.component.html',
  styleUrls: ['./essentails.component.css']
})
export class EssentailsComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private prodcutService: ProductsService,
    private msg: MessangerService,
    private orderService: OrderService,
    private cartService: CartService
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
    // this.msg.sendMsg(this.product);
    this.cartService.addItem(this.product) 

    this.toast.success(`${this.product.title} added to the cart.`, 'Item Added', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    this.ngOnInit();
  }

  // updateCart(){
  //   this.orderService.changeSize(''+this.msg.getCartItems().length);
  //   console.log(this.msg.getCartItems().length);
  // }

  reload(){
    this.ngOnInit();
  }


}
