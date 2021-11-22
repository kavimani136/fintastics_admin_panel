import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'src/app/core/services/cookie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserProfileService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/auth.models';
import { CustomerService } from 'src/app/core/services/customer/customer.service';
import { AdminModulesService } from 'src/app/core/services/admin/admin-modules.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {
  isShowErrors: boolean = false;
  user: User;
  private _id: any;
  UserList: any;
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private router: Router,public dialogRef: MatDialogRef<ViewUserDetailsComponent>,
  private authService: AuthenticationService,
  private adminService:AdminModulesService,) { this.user = this.authService.currentUser();}

  ngOnInit() {
    console.log("this.data",this.data);
    this.UserList = this.data;
//     account_type: "Personal"
// createdDate: undefined
// date_of_reg: undefined
// first_name: ""
// mobile_type: "Android"
// parent_of: ""
// password: "123456"
// updatedDate: undefined
// user_email: "iddineshkumar@gmail.com"
// user_phone: undefined
// user_status: undefined
// username: "DineshP"
  }



  public viewTransaction(){
    this.dialogRef.close();
      var navigationExtras = {
        queryParams: { user_id: this.UserList._id, username: this.UserList.username ,roll_type:this.UserList.roll_type },
       };
        this.router.navigate(['/transaction-details'],navigationExtras);
  }

}
