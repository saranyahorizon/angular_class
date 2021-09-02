import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DBServiceService } from './service/dbservice.service';
import { FormsModule } from '@angular/forms';
import { ChildPageComponent } from './child-page/child-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChildPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ DBServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
