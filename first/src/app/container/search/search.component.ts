import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone:true, 
  imports: [RouterOutlet,NgIf,NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    searchText:string="";
    updateSearchText(event:any){
           this.searchText=event.target.value;
        }
}
