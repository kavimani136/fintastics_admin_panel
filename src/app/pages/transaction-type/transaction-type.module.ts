import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModules } from 'src/app/material.module';
import { ViewUserDetailsComponent } from '../view-user-details/view-user-details.component';
import { TransactionTypeComponent } from './transaction-type.component';
import { AddEditTransactionTypeFormComponent } from './add-edit-transaction-type-form/add-edit-transaction-type-form.component';
import { AddTransactionTypeComponent } from './add-transaction-type/add-transaction-type.component';
import { EditTransactionTypeComponent } from './edit-transaction-type/edit-transaction-type.component';



@NgModule({
    declarations: [
        TransactionTypeComponent,
        AddEditTransactionTypeFormComponent,
        AddTransactionTypeComponent,
        EditTransactionTypeComponent

    ],
    exports: [TransactionTypeComponent],
    imports: [
        CommonModule,
        AppMaterialModules,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    entryComponents: [  
        AddEditTransactionTypeFormComponent,
        AddTransactionTypeComponent,
        EditTransactionTypeComponent

    ]

})

export class TransactionTypeModule { }