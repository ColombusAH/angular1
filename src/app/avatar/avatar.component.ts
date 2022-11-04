import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() imageSrc: string = '';
  @Input() user: { name: string, dob: Date; } | null = null;

  constructor() { }

  ngOnInit(): void {


  }



}
