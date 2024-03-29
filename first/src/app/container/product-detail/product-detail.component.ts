import { Component, Input } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductlistComponent } from '../productlist/productlist.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
     

      @Input() productlistComp:ProductlistComponent=undefined;
      product:Product;

      // lifecycle hook
      ngOnInit(){
         this.product=this.productlistComp.selectedProduct;
      }
}
