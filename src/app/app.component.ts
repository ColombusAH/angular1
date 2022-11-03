import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular1';

  clickText = 'click';
  cancelText = 'cancel';

  clicked(e: MouseEvent) {
    this.clickText = 'worked!';
    console.log(e);
  }

  onAvatarClick($event: Event) {
    console.log($event);
  }
}
