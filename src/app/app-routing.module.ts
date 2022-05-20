import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  //EXAMPLE path
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'newad', component: AddNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
