import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from './../../../Model/Product';
// import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet ,NgIf,NgFor,NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
     // here we use @Input Decorator
     @Input()
     product:Product;
     
}
