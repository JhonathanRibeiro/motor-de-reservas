import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment/payment.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SearchBodyComponent } from './search-body/search-body.component';

const routes: Routes = [
  { path: 'home', component: SearchBodyComponent },
  { path: 'search',  component: SearchBodyComponent },
  { path: 'rooms',   component: RoomsComponent },  
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
