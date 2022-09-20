import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:"",
    component:ViewAllProductsComponent
  },
  {
    path:"new",
    component:AddProductComponent,
  },
  {
    path:"edit/:id",
    component:AddProductComponent,
  },
  {
    path:":id",
    component:AddProductComponent,
  },
  {

  }


]
console.log("hhhh")
@NgModule({
  declarations: [
    ViewAllProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
