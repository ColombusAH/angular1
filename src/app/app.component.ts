import { Component } from '@angular/core';
import { IProduct } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular1';
  showHeader = false;
  buttonsName = [new Date().toString(), new Date().toString()];

  clickText = 'click the button please to change the content';
  cancelText = 'cancel';

  clicked(e: MouseEvent, name: string) {

    this.clickText = 'worked!';

    this.buttonsName = [...this.buttonsName, 'bla'];

  }

  onAvatarClick(event: Event) {

  }

  doda(index: number, name: string) {

    return name;
  }
}
