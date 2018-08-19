
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@myApp/core';
import { SharedModule } from '@myApp/shared';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
