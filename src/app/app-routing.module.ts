import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsdepartmentComponent } from './newsdepartment/newsdepartment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CollectionnewsComponent } from './collectionnews/collectionnews.component';


const routes: Routes = [
  {path:'News/item/:id', component:NewsComponent},
  {path:'newsdepartment/:id', component:NewsdepartmentComponent},
  //{path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
