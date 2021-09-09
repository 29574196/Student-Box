import { PrimsComponent } from './components/prims/prims.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'single',
    component: SingleProductComponent
  },
  {
    path: 'prims',
    component: PrimsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
