import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { User } from 'src/app/core/models/auth.models';
import { AdminModulesService } from 'src/app/core/services/admin/admin-modules.service';
import { DatePipe } from '@angular/common'
import { AddEditTransactionDescriptionFormComponent } from '../add-edit-transaction-description-form/add-edit-transaction-description-form.component';
@Component({
  selector: 'app-add-transaction-description',
  templateUrl: './add-transaction-description.component.html',
  styleUrls: ['./add-transaction-description.component.css']
})
export class AddTransactionDescriptionComponent implements OnInit {

  isShowErrors: boolean = false;
  @ViewChild(AddEditTransactionDescriptionFormComponent,{ static: false })
  public addForm: AddEditTransactionDescriptionFormComponent;
  user: User;
  UserList: any;
  constructor(public dialogRef: MatDialogRef<AddTransactionDescriptionComponent>,
    private adminService:AdminModulesService,) { }

  ngOnInit() {
    this.adminService.getUserList().subscribe(async data=>{
      const response:any = data;
      this.UserList = await response['Data'];
    })
  }


  public save() {
    this.isShowErrors = true;
    if (this.addForm.addEditForm.valid) {
      console.log(this.addForm.addEditForm.value);
      const enteredData = this.addForm.addEditForm.value;
        this.adminService.creatDescriptionType(enteredData).subscribe(
          response => {
            this.success(response['Status']);
            this.dialogRef.close('Success');
          },
          (err: HttpErrorResponse) => {
            console.log("err",err)
            this.handleError(err);
          }
        )
      
    }
    else {
     
    }
  }

  private success(message) {
    Swal.fire({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: message, icon: 'success', });
    this.dialogRef.close('Success'); 
   // this.alertService.success('Saved successfully');
  }

  private handleError(error) {
    Swal.fire({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: error, icon: 'error', });
    this.dialogRef.close('Success');
  //  this.alertService.success(error);
  }

  reset() {
    this.addForm.addEditForm.reset();
  }

}

