import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBookComponent } from './components/form-book/form-book.component';

const routes: Routes = [
 
  {path: 'formBook', component: FormBookComponent},
  
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
