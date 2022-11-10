import { AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnChanges, OnInit, DoCheck {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() price: number = 0;
  @Input() imageSrc: string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }



}
