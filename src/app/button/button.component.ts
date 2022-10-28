import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text = '';

  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.myClick.emit();
  }

}
