import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuComponent } from "app/sku/sku.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkuComponent],
  exports: [SkuComponent]
})
export class SkuModule { }
