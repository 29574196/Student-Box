import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,) { }

    registerData: any = {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '', 
    };

    loginData: any = {
      email: '',
      password: '',
    };



  ngOnInit(): void {
  }

  register() {
    this.spinner.show();
    this.authService.registerUser(this.registerData).subscribe(
      (res) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 2500);
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('name', res.name);
        localStorage.setItem('phone', res.phone);
        localStorage.setItem('id', res._id);
        this.toast.success('Sign-Up Successful, Hello, '+ res.name, 'Register');
        this.router.navigate(['/cart'])
        // this.reset();
        // console.log('Successful');
      },
      (err) => {
        // console.log('Failed');
        this.toast.error('Sign-Up Failed, please try again', 'Register');
      }
    );
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

}
