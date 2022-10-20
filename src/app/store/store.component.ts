import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Prod } from '../prod';
import { PRODS } from '../prod-mock';
import { ProductService } from './product.services';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit , OnDestroy {
  color:string="";
  text : string = "";
  products:Prod[] = [];
  errorMessage: string = '';
  sub! : Subscription ;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err,
    });
    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

 
  getColor(){
    return this.color ="text-primary";
  }
  onRatingClicked(message : string): void{
    this.text =' '+ message;
  }

}
