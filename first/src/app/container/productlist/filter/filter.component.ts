import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outOfStock:number=0;

  // for data transfer child to parent component
  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>();
  selectedFilterRadioButton:string="all";

  // this method for raise the new EventEmitter
  onselectedFilterRadioButtonChanged(){
    // console.log("selected filter button changed event raised");
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}


