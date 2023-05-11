import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserManageComponent } from './user-manage/user-manage.component';



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
      ])
      ],
    providers:[]
  })
  export class HomeModule { }