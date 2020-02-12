import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NewsdepartmentComponent } from './newsdepartment/newsdepartment.component';
import { CollectionnewsComponent } from './collectionnews/collectionnews.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    
    PageNotFoundComponent,
    
    NewsdepartmentComponent,
    CollectionnewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
