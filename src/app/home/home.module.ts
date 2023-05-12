import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './product-Manage/add-product/add-product.component';
import { ProductListComponent } from './product-Manage/product-list/product-list.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './user-manage/update-employee/update-employee.component';
import { EmployeeListComponent } from './user-manage/employee-list/employee-list.component';
import { ProductEditComponent } from './product-Manage/product-edit/product-edit.component';
import { AuthGuard } from '../Guard/auth.guard';



@NgModule({
    declarations: [
      AddProductComponent,
      ProductListComponent,
      UserManageComponent,
      UpdateEmployeeComponent,
      EmployeeListComponent,
      ProductEditComponent
    ],
    imports: [
      RouterModule.forChild([
        {path:'productList',component:ProductListComponent,canActivate:[AuthGuard]},
        {path:'AddProduct',component:AddProductComponent,canActivate:[AuthGuard]},
        {path:'userManage',component:UserManageComponent,canActivate:[AuthGuard]},
        {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
        {path:'employeeList',component:EmployeeListComponent,canActivate:[AuthGuard]},
        {path:'productEdit/:id',component:ProductEditComponent}
      ]),
      FormsModule,
      ReactiveFormsModule,
      CommonModule
      ],
    providers:[]
  })
  export class HomeModule { }