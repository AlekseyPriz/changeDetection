import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FactorialPipe } from './shared/factorial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    FactorialPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
