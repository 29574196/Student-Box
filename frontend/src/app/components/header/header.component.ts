import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';

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
    private spinner: NgxSpinnerService
  ) {}

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;
  isLoggedIn = true;
  // ... your class variables here

  // ... your class variables here
  userName!: string;

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
  cartLength!: number;
  storeValue: any;
  ngOnInit(): void {}

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
      },
      (err) => {
        console.log('Failed');
        this.toast.error('Login Failed, please try again', 'Login');
      }
    );
  }

  // tslint:disable-next-line: typedef
  register() {
    this.authService.registerUser(this.registerData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('phone', res.phone);
        // this.reset();
        console.log('Successful');
      },
      (err) => {
        console.log('Failed');
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
      console.log('true');
      this.isLoggedIn;
    } else {
      // console.log('true');
      // this.router.navigate(['/home']);
      this.isLoggedIn = false;
    }
  }

}
