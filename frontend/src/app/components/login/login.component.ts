import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private msg: MessangerService,
    private order: OrderService
  ) { }

  ngOnInit(): void {
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
        this.reset();
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
    this.spinner.show();
    this.authService.registerUser(this.registerData).subscribe(
      (res) => {
        this.spinner.hide();
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('phone', res.phone);
        // this.reset();
        console.log('Successful');
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
    this.router.navigate(['/cart'])
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
      this.router.navigate(['/'])
    } else {
      // console.log('true');
      // this.router.navigate(['/home']);
      this.isLoggedIn = false;
    }
  }

}
