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



  ngOnInit(): void {
  }

  register() {
    this.authService.registerUser(this.registerData).subscribe(
      (res) => {
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

}
