import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserDetailsModule } from './user-details/user-details.module';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionDetailsModule } from './transaction-details/transaction-details.module';
import { ChildUserDetailsModule } from './child-user-details/child-user-details.module';
import { TransactionTypeComponent } from './transaction-type/transaction-type.component';
import { TransactionDescriptionComponent } from './transaction-description/transaction-description.component';
import { TransactionTypeModule } from './transaction-type/transaction-type.module';
import { TransactionDescriptionModule } from './transaction-description/transaction-description.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppMaterialModules } from '../material.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [   NgxChartsModule, 
    TransactionTypeModule,
    TransactionDescriptionModule,
    UserDetailsModule,
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    NgbDropdownModule,
    ChildUserDetailsModule,
    TransactionDetailsModule,
    UIModule,
    PagesRoutingModule,AppMaterialModules
  ]
})
export class PagesModule { }
