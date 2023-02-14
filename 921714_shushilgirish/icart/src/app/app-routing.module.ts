import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path:'items',component:ItemsComponent},
  {path:'itemdetail',component:ItemdetailComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
