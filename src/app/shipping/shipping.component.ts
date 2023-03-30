import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }
  
  shippingCosts!: Observable<{ type: string, price: number }[]>;   
  lastUpdateDatetime: Date|undefined;

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();   
    this.lastUpdateDatetime = new Date(); 
  }
}
