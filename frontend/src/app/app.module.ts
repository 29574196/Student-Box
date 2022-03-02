import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { PrimsComponent } from './components/prims/prims.component';
import { ProductsComponent } from './components/products/products.component';
import { EssentailsComponent } from './components/essentails/essentails.component';
import { PremiumComponent } from './components/premium/premium.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartTableComponent } from './components/cart/cart-table/cart-table.component';
import { SuccessComponent } from './components/success/success.component';
import { OrderFailedComponent } from './components/order-failed/order-failed.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuantitiesComponent } from './components/quantities/quantities.component';
import { GridComponent } from './components/grid/grid.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    CheckoutComponent,
    RegisterComponent,
    SingleProductComponent,
    PrimsComponent,
    ProductsComponent,
    EssentailsComponent,
    PremiumComponent,
    HeaderComponent,
    ErrorComponent,
    AboutUsComponent,
    CartTableComponent,
    SuccessComponent,
    OrderFailedComponent,
    ContactComponent,
    QuantitiesComponent,
    GridComponent,
    AddOnsComponent,
    OrderlistComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    DragDropModule,
    MatCardModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
