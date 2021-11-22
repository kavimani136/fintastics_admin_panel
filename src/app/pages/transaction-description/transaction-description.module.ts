import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModules } from 'src/app/material.module';
import { TransactionDescriptionComponent } from './transaction-description.component';
import { AddEditTransactionDescriptionFormComponent } from './add-edit-transaction-description-form/add-edit-transaction-description-form.component';
import { EditTransactionDescriptionComponent } from './edit-transaction-description/edit-transaction-description.component';
import { AddTransactionDescriptionComponent } from './add-transaction-description/add-transaction-description.component';



@NgModule({
    declarations: [
        TransactionDescriptionComponent,
        AddEditTransactionDescriptionFormComponent,
        EditTransactionDescriptionComponent,
        AddTransactionDescriptionComponent

    ],
    exports: [TransactionDescriptionComponent],
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
        AddEditTransactionDescriptionFormComponent,
        EditTransactionDescriptionComponent,
        AddTransactionDescriptionComponent
    ]

})

export class TransactionDescriptionModule { }