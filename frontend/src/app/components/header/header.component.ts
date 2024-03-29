import { OrderService } from './../../services/order.service';
import { MessangerService } from './../../services/messanger.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private cartService: CartService
    // private msg: MessangerService,
    // private order: OrderService
  ) {}

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;
  isLoggedIn = true;
  // ... your class variables here

  // ... your class variables here
  userName = '';

  loginData: any = {
    email: '',
    password: '',
  };

  registerData: any = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  };
  itemInCart!: Number;
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
      this.itemInCart = data.length;
      this.cartItems = data;

      if(this.cartItems){
        this.getTotal(this.cartItems);

      }
    });
    this.loggedIn();

  }

  // tslint:disable-next-line: typedef
  login() {
    this.authService.loginUser(this.loginData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('phone', res.phone);
        localStorage.setItem('id', res._id);
        // this.reset();
        console.log('Successful');
        this.toast.success(`Login Successful, Welcome Back ${res.name}`, 'Login Success');

      },
      (err) => {
        // console.log('Failed');
        this.toast.error('Login Failed, please try again', 'Login');
      }
    );
  }

  // tslint:disable-next-line: typedef
  register() {
    this.spinner.show();
    this.authService.registerUser(this.registerData).subscribe(
      (res) => {
        this.spinner.hide();
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('phone', res.phone);
        localStorage.setItem('id', res._id);
        // this.reset();
        // console.log('Successful');
        this.toast.success(
          `${this.registerData.email} successfully logged in.`,
          'Welcome back!',
          {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
          }
        );
      },
      (err) => {
        // console.log('Failed');
        this.toast.error('Sign-Up Failed, please try again', 'Register');
      }
    );
  }

  // tslint:disable-next-line: typedef
  reset() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.toast.success(
        `${this.loginData.email} successfully logged in.`,
        'Welcome back!',
        {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
      this.spinner.hide();
    }, 2000);
    this.ngOnInit();
  }

  removeCartItem(i: number){
    this.cartItems.splice(i,1);
    this.cartService.setCartData(this.cartItems);
    this.getTotal(this.cartItems);
  }

  signOut() {
    this.authService.logoutUser();
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.toast.error(
        `${this.loginData.email} successfully logged off.`,
        'Signed Out!',
        {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
      this.spinner.hide();
    }, 3000);
    this.isLoggedIn = false;
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    if (this.authService.loggedIn()) {
      // console.log('true');
      this.isLoggedIn;
      const name = localStorage.getItem('name');
      
      console.log(name);

    } else {
      // console.log('true');
      // this.router.navigate(['/home']);
      this.isLoggedIn = false;
    }
  }

  getTotal(data:any){
    let subs = 0;

    for(const item of data){
      subs += item.price * item.quantity
    }
    this.cartTotal = subs;
    // console.log(this.cartTotal);
  }

}
