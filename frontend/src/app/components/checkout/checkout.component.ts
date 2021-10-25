import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: ProductModelServer[] = [];
  cartTotal = 0;
  isLoggedIn = true;
  showCheckout: boolean = false;

  constructor(
    // private msg: MessangerService,
    //           private order: OrderService,
              private authService: AuthService) { }

  cartLength!: any;


  data = {
    merchant_id:"12276456",
    merchant_key:"lpk4o6pztf5n8",
    name_first:"",
    name_last:"",
    email_address:"",
    return_url:"https://www.example.com/success",
    cancel_url:"https://www.example.com/cancel",
    notify_url:"https://secondchancebooks.co.za/api/payfast-confirmation",
    cell_number:"",
    cost:0,
    item_name:'The Student Box: '
  }

  orderData = {
    user: '',
    items: Array(),
    totalPrice: 0,
    address1:'',
    notes: '',

  }

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
    this.data.cost = this.cartTotal;
    this.data.item_name = "Premium";
  }

  removeCartItem(i: any){
    // this.cartItems.splice(i,1);
    // this.order.changeItems(this.cartItems);
    // this.msg.updateCartItems(this.cartItems);
    // this.cartLength = this.cartItems.length;
    // this.cartTotal = this.msg.getTotal();
  }

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

  makeOrder(){
    // this.orderData.items = this.cartItems;
    console.log(this.cartItems);
    // const result = [];
    this.orderData.totalPrice = this.cartTotal;
    for(let item of this.cartItems){
      // this.orderData.items.push(item._id);

      // result.push(item._id);
      // console.log(result);
      this.orderData.items.push(item.title);
    }
    console.log(this.orderData.items);
    this.orderData.user = '614a3df17c31b116b8c8fd7e';
    this.orderData.totalPrice = this.cartTotal;
    this.orderData.address1 = '7 Silver Street'
    // this.order.postOrder(this.orderData).subscribe(res=>{

    //   console.log(this.data.item_name);
    // },err=>{
    //   //dont allow payment
    //   //disable payment button
    //   this.data.item_name = "";
    // })
  }

}
