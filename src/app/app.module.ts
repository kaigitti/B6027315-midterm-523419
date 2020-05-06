import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsService } from "./services/products.service";
import { CartService } from "./services/cart.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MenuComponent
    // FontAwesomeModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductsService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
