import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './home/product-list/product-list.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { UserManageComponent } from './home/user-manage/user-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
