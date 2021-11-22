import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildUserDetailsComponent } from './child-user-details/child-user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
   { path: 'user-details',  component: UserDetailsComponent }, 
   { path: 'transaction-details',  component: TransactionDetailsComponent }, 
   { path: 'child-user-details',  component: ChildUserDetailsComponent }, 
   { path: 'payment-type',  component: TransactionTypeComponent }, 
   { path: 'transaction-description',  component: TransactionDescriptionComponent }, 
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
