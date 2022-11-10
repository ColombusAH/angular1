import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../models';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: IProduct[] = [];
  @Output() productClicked = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

  trackByProductId(index: number, product: IProduct) {
    return product._id;
  }

}
