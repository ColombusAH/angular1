import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Output() avatarClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }


  onAvatarClick(event: Event) {
    this.avatarClick.emit(event);
    console.log('[HeaderComponent] onAvatarClick');
  }
}

