import { Component } from '@angular/core';
import { NgFor,NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgForOf],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
    mainMenuItem:string[]=["Home","Products","Services","Contact","Sales"]
}
