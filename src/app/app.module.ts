import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { CartComponent } from './cart/cart.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataServicesComponent } from './data-services/data-services.component';
import { TradesService } from './trades.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    InputFieldComponent,
    FooterComponent,
    SimpleButtonComponent,
    CartComponent,
    TestComponent,
    HomeComponent,
    ProductListComponent,
    DataServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'test', component: TestComponent },
      { path: 'cart', component: CartComponent },
      { path: 'api', component: DataServicesComponent },
    ])
  ],
  providers: [TradesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
