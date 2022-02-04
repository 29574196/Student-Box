import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  swappedItems : any[] = [];
  valueItem: any = '';

  constructor(
    
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private prodcutService: ProductsService,
    private cartService: CartService
  ) { }

  // todo = [
  //   "1",
  //   "2",
  //   "3",
  //   "4"
  // ];

  // done = [
  //   "New",
  //   "Lost",
  //   "Other",
  //   "Hello"
  // ]

  title = 'Substitute Items';
  website = 'https://samorgill.com';

  todos = [
    {
      name: 'Bananas',
      category: 'Fruit'
    },
    {
      name: 'Apples',
      category: 'Fruit'
    },
    {
      name: 'Strawberries',
      category: 'Fruit'
    }
  ];

  completed = [
    {
      name: 'Onions',
      category: 'Vegetables'
    },
    {
      name: 'Mangoes',
      category: 'Vegetables'
    },
    {
      name: 'React',
      category: 'Vegetables'
    }
  ];


  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>){
    if(event.previousContainer === event.container){
      
      this.valueItem = event.previousContainer.data;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.handleToCart();
      
      
    } else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.valueItem = event.previousContainer.data
      this.handleToCart();
    }
  }

  handleToCart(){

    console.log(this.valueItem);
    console.log(this.swappedItems);

  }

  addToCart(){
    localStorage.setItem('swapItems',JSON.stringify(this.valueItem));
  }

  // onDrop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex, event.currentIndex);
  //   }
  // }

}
