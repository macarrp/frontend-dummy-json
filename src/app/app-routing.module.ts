import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './carts/cards.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductComponent},
  {path: 'cartas', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
