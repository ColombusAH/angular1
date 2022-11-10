import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models';

enum COLOR {
  BLUE = 'BLUE',
  RED = 'RED',
  GREEN = 'GREEN'
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  selectedProduct: IProduct | null = null;
  selectedColor: COLOR = COLOR.BLUE;
  COLOR = COLOR;

  products = [
    {
      "_id": "6364e3a95d264e95dd0a9b7b",
      "price": 163184,
      "imageUrl": "http://placehold.it/32x32",
      "title": "Sherrie Kelley",
      "description": "Ea veniam id consequat est aliquip. Aliquip adipisicing irure proident duis do nostrud aute occaecat. Enim reprehenderit nostrud non ut cupidatat. Anim magna magna labore do dolor labore. Adipisicing quis labore incididunt excepteur exercitation voluptate nostrud et consequat laborum eiusmod anim. Veniam do sit aliquip et do consectetur magna nisi fugiat velit aliquip.\r\n"
    },
    {
      "_id": "6364e3a9d1d7d5ed63cdde30",
      "price": 233289,
      "imageUrl": "http://placehold.it/32x32",
      "title": "Herman Wall",
      "description": "Eu eiusmod ullamco duis cillum. Sint excepteur enim esse veniam officia. Non do dolore est ut ex anim laborum eiusmod laborum amet excepteur excepteur labore est. Exercitation labore consectetur aute reprehenderit eu Lorem et nulla. Dolor ad nisi dolore aute voluptate ullamco dolor quis laborum nisi sunt.\r\n"
    },
    {
      "_id": "6364e3a9a9b59dc27f4bcc8f",
      "price": 214527,
      "imageUrl": "http://placehold.it/32x32",
      "title": "Wilkerson Alvarado",
      "description": "Tempor commodo mollit deserunt deserunt tempor esse elit et dolor sint amet consectetur cillum dolor. Deserunt duis nisi officia reprehenderit Lorem consectetur officia culpa amet officia reprehenderit ad. Cillum qui sint sit nostrud incididunt pariatur dolor. Qui elit nostrud sunt minim ipsum exercitation laboris elit non sit anim.\r\n"
    },
    {
      "_id": "6364e3a93788731a40456671",
      "price": 161858,
      "imageUrl": "http://placehold.it/32x32",
      "title": "Colon Compton",
      "description": "Sunt ad Lorem dolor aliqua sit velit do ex. Aliqua consequat fugiat ullamco elit duis eu. Proident minim non magna quis minim laboris duis enim sint. Excepteur duis minim culpa cillum occaecat sint.\r\n"
    },
    {
      "_id": "6364e3a9bc9f0ed4961f6659",
      "price": 296511,
      "imageUrl": "http://placehold.it/32x32",
      "title": "Hartman Blankenship",
      "description": "Consequat dolor aute ut in et ipsum. Excepteur eu exercitation aute dolor commodo labore culpa eiusmod commodo elit sunt. Ut duis labore laborum cillum eiusmod proident et sunt. Reprehenderit reprehenderit ex commodo sint eu aliqua officia cupidatat sit proident fugiat enim mollit. Laboris pariatur cupidatat quis occaecat sint incididunt. Laboris qui aute aliquip ipsum proident quis voluptate ut reprehenderit irure incididunt irure dolor ea. Ex anim magna enim labore nisi nulla elit mollit est voluptate dolor in do.\r\n"
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }


  handleProductClicked(product: IProduct) {
    this.selectedProduct = product;

  }

}
