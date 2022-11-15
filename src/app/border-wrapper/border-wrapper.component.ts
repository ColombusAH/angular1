import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-wrapper',
  templateUrl: './border-wrapper.component.html',
  styleUrls: ['./border-wrapper.component.scss']
})
export class BorderWrapperComponent implements OnInit {

  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
