import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeModule } from './home/home.module';
import { NewloginComponent } from './newlogin/newlogin.component';
import { NewsignupComponent } from './newsignup/newsignup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewloginComponent,
    NewsignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
