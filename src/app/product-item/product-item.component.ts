import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() price: number = 0;
  @Input() imageSrc: string = '';

  priceReduced = false;

  finalTile = '';

  constructor() { }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes.price && !changes.price.isFirstChange() && changes.price.previousValue > changes.price.currentValue) {
      this.priceReduced = true;
    }
    else {
      this.priceReduced = false;
    }
    if (changes.price?.firstChange) {
      // console.log('this.if the first change of price ');
    }
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.finalTile = this.title + 'blablabla';
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngOnDestroy(): void {

    // console.log('ngOnDestroy');
  }

}
