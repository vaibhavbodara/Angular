import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {NgFor, NgForOf} from "@angular/common";


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [RouterOutlet,SearchComponent,NgForOf,NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  //Name="John Doe";
//   addToCart:number=0;
  //  listOfString:string[]=["vaibhav","dharmik","mitul","naitik"];
  //  item:string[]=["vaibhav","dharmik","mitul","naitik"];
  
//   // here we create product object
//  product={
//     name:"iPhone 15",
//     price: 999,
//     color:"Black",
//     dprice:8.5,
//     inStock:10,
//     pImage:"/assets/images/image1.jpg"
//   }
  
//   // here we create method getDiscountedPrice 
//   getDiscountedPrice(){
//     return this.product.price-(this.product.dprice*this.product.price)/100
//   }

//   getinStock(){
//         // here we use ternary operator
//         return (this.product.inStock)>0 ?  (this.product.inStock + " items left")   : "not in stock"
//   }

//   onChangeName(event:any){

//     // here we use event which create one object in the console 
//     // that InputEvent have target and that have value which is store in the Name
//     //this.Name=event.target.value;
//     // console.log(event.target.value);
//    }

//    decrementValue(){
//     if(this.addToCart>0){
//       this.addToCart--;
//     }
//    }
//    incrementValue(){
//        if(this.addToCart<this.product.inStock){
//         this.addToCart++;
//        }
//    }


}
