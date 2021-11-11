import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: ProductModelServer[] = [];
  cartTotal = 0;

  showCheckout: boolean = false;
  loader = true;

  constructor(
    // private msg: MessangerService,
    private order: OrderService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  cartLength!: any;
  email = localStorage.getItem('email') || '';
  name = localStorage.getItem('name') || '';
  phone = localStorage.getItem('phone') || '';

  data = {
    merchant_id: '16655987',
    merchant_key: 'zod5nwwj2gqvz',
    name_first: '',
    name_last: '',
    email_address: '',
    return_url: 'https://www.studentbox.co.za/order-confirmation',
    cancel_url: 'https://www.studentbox.co.za/order-failed',
    notify_url: 'https://secondchancebooks.co.za/api/payfast-confirmation',
    cell_number: '',
    cost: 0,
    item_name: 'Student Box',
  };

  orderData = {
    user: '',
    itemsTitle: Array(),
    items: Array(),
    totalPrice: 0,
    address1: '',
    notes: '',
    payment_method: '',
  };

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
    this.spinner.show();
    this.loader = true;

    this.cartService.cartItems.subscribe((data) => {
      // this.spinner.hide();
      this.cartItems = data;
      setTimeout(() => {
        this.spinner.hide();
      }, 2500);

      if (this.cartItems) {
        this.getTotal(this.cartItems);
      }
    });
    this.data.cost = this.cartTotal;

    for (let item of this.cartItems) {
      // this.orderData.items.push(item._id);

      // result.push(item._id);
      // console.log(result);
      this.data.item_name = item.title;
      // console.log(this.data.item_name);

    }
  }

  removeCartItem(i: number) {
    this.cartItems.splice(i, 1);
    this.cartService.setCartData(this.cartItems);
    this.getTotal(this.cartItems);
  }

  makeOrder() {
    // this.orderData.items = this.cartItems;
    // console.log(this.cartItems);
    // const result = [];
    this.orderData.totalPrice = this.cartTotal;
    for (let item of this.cartItems) {
      // this.orderData.items.push(item._id);

      // result.push(item._id);
      // console.log(result);
      this.orderData.itemsTitle.push(item.title);
    }
    // console.log(this.orderData.items);

    this.orderData.totalPrice = this.cartTotal;

    // this.order.postOrder(this.orderData).subscribe(res=>{

    //   console.log(this.data.item_name);
    // },err=>{
    //   //dont allow payment
    //   //disable payment button
    //   this.data.item_name = "";
    // })
  }

  makeCashOrder() {
    this.orderData.totalPrice = this.cartTotal;
    for (let item of this.cartItems) {
      // this.orderData.items.push(item._id);

      // result.push(item._id);
      // console.log(result);
      this.orderData.itemsTitle.push(item.title);
    }
    // console.log(this.orderData.items);
    this.orderData.items = this.cartItems;
    this.orderData.user = localStorage.getItem('id') || '';
    this.orderData.totalPrice = this.cartTotal;
    this.orderData.payment_method = 'Cash On Delivery';
    this.spinner.show();
    this.order.postOrder(this.orderData).subscribe(
      (res) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 2500);

        localStorage.removeItem('cart');
        let orderArray: any[] = [];
        orderArray.push(res);
        localStorage.setItem('order', JSON.stringify(orderArray));

        this.router.navigate(['/order-confirmation']);
      },
      (err) => {
        //dont allow payment
        //disable payment button
        this.data.item_name = '';
      }
    );
  }

  getTotal(data: any) {
    let subs = 0;

    for (const item of data) {
      subs += item.price * item.quantity;
    }
    this.cartTotal = subs;
    // console.log(this.cartTotal);
  }

  // tslint:disable-next-line: typedef
  reset() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    this.ngOnInit();
  }
}
