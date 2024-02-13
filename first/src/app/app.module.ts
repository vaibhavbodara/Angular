// Import necessary Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
 import { SetBackground } from './CustomDirectives/SetBackground.directive';
import{HighlightDirective}from'./CustomDirectives/highlight.directive';
import {AppHoverDirective}from './CustomDirectives/app-hover.directive'


@NgModule({
  declarations: [
    AppComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective
  ],
  
  imports: [
    BrowserModule,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent,
    
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule { }
