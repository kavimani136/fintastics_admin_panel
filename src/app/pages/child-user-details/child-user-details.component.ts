import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { MatTableAttributes, DateFormat } from "../../common/ui.constant";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';
import { first } from "rxjs/operators";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { User } from "src/app/core/models/auth.models";
import { AdminModulesService } from "src/app/core/services/admin/admin-modules.service";
import { ExportToExcelService } from "src/app/core/services/exportExcel/export-to-excel.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ViewUserDetailsComponent } from "../view-user-details/view-user-details.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Product {
  roll_type:string;
  first_name:string;
  username: string;
  user_email: string;
  // delete_status:string;
  user_phone:string;
  createdDate: string;
  updatedDate: string;
  password:string;
  date_of_reg:string;
  mobile_type:string;
  user_status:string;
  account_type:string;
  parent_of:string;
  _id:string
}
@Component({
  selector: 'app-child-user-details',
  templateUrl: './child-user-details.component.html',
  styleUrls: ['./child-user-details.component.css']
})
export class ChildUserDetailsComponent implements OnInit {

 
  @ViewChild('test1', { static: false }) content: ElementRef;
  testAttributesMap = new Map();
  public formGroup: FormGroup;
  PAGE_SIZE = MatTableAttributes.PAGE_SIZE;
  PAGINATION_RANGE = MatTableAttributes.PAGINATION_RANGE;
  DATE_FORMAT = DateFormat.DATE_FORMAT;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  error = '';
  userList:any;
  dynamicTableData: any[];
  user: User;
  parent_of: any;
  
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router,private adminService:AdminModulesService,private exportToExcelService: ExportToExcelService,public dialog: MatDialog)
   { 
    this.route.queryParams.subscribe(params => {
      this.parent_of = params['parent_of'];
      console.log("parent_of ",this.parent_of);
    });       
   }

  public displayedColumns: string[] = ['sno','username','user_email','user_phone','mobile_type','account_type','roll_type','createdDate',  'updatedDate','actions'];
  public displayedLabelColumns: string[] = ['serial no','user name','user email','user phone','mobile type','account type','roll type','created Date',  'updated Date', 'actions'];
  dataSource: MatTableDataSource<Product>;

  ngOnInit() {
   this.getAllCustomer();
   var currentDate = new Date();
   var beforeMonthDate = currentDate.setMonth(currentDate.getMonth() - 1);
   this.formGroup = this.fb.group({
    startDate: [new Date(beforeMonthDate), Validators.required],
    endDate: [new Date(), Validators.required],

  });
  }

  getAllCustomer(){
    debugger;
    this.adminService.getChildUserList(this.parent_of).pipe()
    .subscribe( data => {
        console.log("data ",data); 
        this.userList = data['Data'];
        this.loadRecord();
      },error => {
        this.error = error;
      });
  }


  loadRecord() {
    debugger
    this.dynamicTableData = [];
    this.userList.forEach(element => {
      if(element.userType != "ADMIN" && element.parent_code != this.parent_of){
        let row: Product = {
          first_name:element.first_name,
          username: element.username,
          user_email: element.user_email,
          user_phone:element.contact_number,
          // delete_status:element.delete_status && element.delete_status == true ?  "true" : "false" ,
          createdDate: element.createdAt,
          updatedDate: element.updatedAt,
          password:element.password,
          date_of_reg:element.date_of_reg,
          user_status:element.user_status,
          account_type:element.account_type,
          mobile_type:element.mobile_type,
          parent_of:element.parent_of,
          _id:element._id,
          roll_type:element.roll_type,
        }
        this.dynamicTableData.push(row);
      }
    })
    this.dataSource = new MatTableDataSource(this.dynamicTableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  public addRecord() {
    // const dialogRef = this.dialog.open(AddUserDetailsComponent, {
    //   width: '550px',
    //   height: 'fit-content',
    //   disableClose: true
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result == 'Success') {
    //     this.getAllCustomer();
    //   }
    // });
  }


  exportAsXLSX(): void {
    let new_list = this.dataSource.filteredData.map(function(obj) {
      return {
        "User Name": obj.username,
        "User Email":obj.user_email,
        "User Phone":obj.user_phone,
        // "User Type":obj.user_type,
        "Created Date":new Date(obj.createdDate),
        "Updated Date":new Date(obj.updatedDate),
      }
    });
    this.exportToExcelService.exportAsExcelFile(new_list, "User Details",);
  }


  public editRecord(items) {
    // const dialogRef = this.dialog.open(EditUserDetailsComponent, {
    //   width: '550px',
    //   height: 'fit-content',
    //   disableClose: true,
    //   data: {
    //     _id:items._id,
    //     username:items.username,
    //     password:items.password,
    //     user_email:items.user_email,
    //     user_phone:items.user_phone,
    //     employee_id:items.employee_id,
    //     date_of_reg:items.date_of_reg,
    //     user_type:items.user_type,
    //     user_status:items.user_status
    //   }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result == 'Success') {
    //     this.getAllCustomer();
    //   }
    // });
  }

  public deleteRecord(recordId){
   
  }

  // public viewRecord(element){
  //   debugger;
  //   if(element.account_type == "Family"){
  //     var navigationExtras = {
  //       queryParams: { parent_of: element.parent_of },
  //      };
  //       this.router.navigate(['/child-user-details'],navigationExtras);
  //   }else{
  //     const dialogRef = this.dialog.open(ViewUserDetailsComponent, {
  //       width: '1000px',
  //       height: 'fit-content',
  //       disableClose: true,
  //       data: {
  //         _id:element._id,
  //         first_name:element.first_name,
  //         username: element.username,
  //         user_email: element.user_email,
  //         user_phone:element.contact_number,
  //         createdDate: element.createdAt,
  //         updatedDate: element.updatedAt,
  //         password:element.password,
  //         date_of_reg:element.date_of_reg,
  //         user_status:element.user_status,
  //         account_type:element.account_type,
  //         mobile_type:element.mobile_type,
  //         parent_of:element.parent_of,
  //       }
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result == 'Success') {
  //         this.getAllCustomer();
  //       }
  //     });

  //   }
  
  // }


  public viewRecord(element){
    debugger;
    if(element.roll_type == "Admin"){
      var navigationExtras = {
        queryParams: { parent_of: element.parent_code },
       };
        this.router.navigate(['/child-user-details'],navigationExtras);
    }else{
      const dialogRef = this.dialog.open(ViewUserDetailsComponent, {
        width: '1000px',
        height: 'fit-content',
        disableClose: true,
        data: {
          _id:element._id,
          first_name:element.first_name,
          username: element.username,
          user_email: element.user_email,
          user_phone:element.contact_number,
          createdDate: element.createdAt,
          updatedDate: element.updatedAt,
          password:element.password,
          date_of_reg:element.date_of_reg,
          user_status:element.user_status,
          account_type:element.account_type,
          mobile_type:element.mobile_type,
          parent_of:element.parent_of,
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'Success') {
          this.getAllCustomer();
        }
      });

    }
  
  }

  public viewTransaction(element){
    debugger;
      var navigationExtras = {
        queryParams: { user_id: element._id, username: element.username ,roll_type:element.roll_type },
       };
        this.router.navigate(['/transaction-details'],navigationExtras);
  }


  filterDatasClearForm(){
    this.getAllCustomer();
  }

  submitData(){
    this.adminService.getFilterDatas(this.formGroup.value).pipe()
    .subscribe( data => {
        console.log("getFilterDatas ",data); 
        this.userList = data['Data'];
        this.loadRecord();
      },error => {
        this.error = error;
      });
  }


}


