import { Component } from '@angular/core';

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
    console.log(name);
    this.clickText = 'worked!';
    console.log(e);
    this.buttonsName = [...this.buttonsName, 'bla'];

  }

  onAvatarClick($event: Event) {
    console.log($event);
  }

  doda(index: number, name: string) {
    console.log(index, name);
    return name;
  }
}
