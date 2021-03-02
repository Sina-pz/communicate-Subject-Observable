import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { MessageBarComponent } from './components/common/message-bar/message-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MessageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
