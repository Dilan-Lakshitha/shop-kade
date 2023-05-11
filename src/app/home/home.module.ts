import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
      AddProductComponent,
      ProductListComponent,
      UserManageComponent
    ],
    imports: [
      RouterModule.forChild([
        {path:'productList',component:ProductListComponent},
        {path:'AddProduct',component:AddProductComponent},
        {path:'userManage',component:UserManageComponent}
      ]),
      FormsModule,
      ReactiveFormsModule,
      CommonModule
      ],
    providers:[]
  })
  export class HomeModule { }