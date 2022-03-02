import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { QuantitiesComponent } from './components/quantities/quantities.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderFailedComponent } from './components/order-failed/order-failed.component';
import { SuccessComponent } from './components/success/success.component';
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
import { RegisterComponent } from './components/register/register.component';
import { GridComponent } from './components/grid/grid.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'premium',
    component: SingleProductComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'prims',
    component: PrimsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
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
    path: 'order-confirmation',
    component: SuccessComponent
  },
  {
    path: 'order-failed',
    component: OrderFailedComponent
  },
  {
    path: 'edit-quantities',
    component: QuantitiesComponent
  },
  {
    path: 'order-item',
    component: OrderItemComponent
  },
  {
    path: 'orderlist',
    component: OrderlistComponent
  },

  {
    path: 'add-ons',
    component: AddOnsComponent
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
