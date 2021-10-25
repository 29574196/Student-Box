import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { PremiumComponent } from './components/premium/premium.component';
import { EssentailsComponent } from './components/essentails/essentails.component';
import { ProductsComponent } from './components/products/products.component';
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
    path: 'premium',
    component: SingleProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'prims',
    component: PrimsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'essentials',
    component: EssentailsComponent
  },
  {
    path:'essentials-plus',
    component: PremiumComponent
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
