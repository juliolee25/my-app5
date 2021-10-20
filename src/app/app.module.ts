import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBookComponent } from './components/form-book/form-book.component';
import { BoxComponent } from './components/box/box.component';
import { VanComponent } from './components/van/van.component';
import { HelperComponent } from './components/helper/helper.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBookComponent,
    BoxComponent,
    VanComponent,
    HelperComponent,
    BookDetailsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
