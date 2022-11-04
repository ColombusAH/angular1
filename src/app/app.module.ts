import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ShortSentencePipe } from './short-sentence.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AvatarComponent,
    ShortSentencePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
