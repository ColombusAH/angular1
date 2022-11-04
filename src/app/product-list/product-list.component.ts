import { Component, Input, OnInit } from '@angular/core';

interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

  trackByProductId(index: number, product: IProduct) {
    return product._id;
  }

}
