import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
     // here we use @Input Decorator
     @Input()
     product:{
      id:number,
      name:string,
      description:string,
      brand:string,
      gender:string,
      category:string,
      size:number[],
      color:string[],
      price:number,
      discountPrice?:number,
      is_in_inventory:boolean,
      items_left:number,
      imageURL:string,
      slug:string
    }
      
}
