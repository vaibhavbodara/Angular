// Import necessary Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }