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
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Product {
  username:string;
  transaction_date: string;
  transaction_type: string;
  transaction_desc:string;
  transaction_way:string;
  createdDate: string;
  updatedDate: string;
  transaction_amount:string;
  transaction_balance:string;
  system_date:string;
  _id:string
}

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

 
  public formGroup: FormGroup;
  @ViewChild('test1', { static: false }) content: ElementRef;
  testAttributesMap = new Map();
  
  PAGE_SIZE = MatTableAttributes.PAGE_SIZE;
  PAGINATION_RANGE = MatTableAttributes.PAGINATION_RANGE;
  DATE_FORMAT = DateFormat.DATE_FORMAT;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  error = '';
  salesPersonList:any;
  dynamicTableData: any[];
  user: User;
  user_id: any;
  username: any;
  roll_type: any;
  balance: any;
  
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private adminService:AdminModulesService,private exportToExcelService: ExportToExcelService,public dialog: MatDialog)
   {  this.route.queryParams.subscribe(params => {
    this.user_id = params['user_id'];
    this.username = params['username'];
    this.roll_type = params['roll_type'];
    
  });       
}

  public displayedColumns: string[] = ['sno','username','transaction_amount','transaction_date','transaction_type','transaction_desc','transaction_way','transaction_balance','createdDate',  'updatedDate'];
  public displayedLabelColumns: string[] = ['serial No','user name','transaction amount','transaction date','transaction type','transaction desc','transaction way','transaction balance','created Date',  'updated Date'];
  dataSource: MatTableDataSource<Product>;

  ngOnInit() {
   this.getAllTransaction();
   var currentDate = new Date();
   var beforeMonthDate = currentDate.setMonth(currentDate.getMonth() - 1);
   this.formGroup = this.fb.group({
    startDate: [new Date(beforeMonthDate), Validators.required],
    endDate: [new Date(), Validators.required],

  });
  }

  getAllTransaction(){
    var data ={
      user_id : this.user_id,
      roll_type : this.roll_type
    }
    this.adminService.getTransactionList(data).pipe()
    .subscribe( data => {
        console.log("getAllTransaction ",data); 
        this.salesPersonList = data['Data'];
        this.balance = data['balance'];
        this.loadRecord();
      },error => {
        this.error = error;
      });
  }

  filterDatasClearForm(){
    this.getAllTransaction();
  }

  submitData(){
    this.adminService.getTransactionFilterDatas(this.formGroup.value).pipe()
    .subscribe( data => {
        console.log("getFilterDatas ",data); 
        this.salesPersonList = data['Data'];
        this.loadRecord();
      },error => {
        this.error = error;
      });
  }



  loadRecord() {
    debugger
    this.dynamicTableData = [];
    this.salesPersonList.forEach(element => {
      if(element.roll_type != "Admin"){
        let row: Product = {
          username:this.username,
          transaction_date: element.transaction_date,
          transaction_type: element.transaction_type,
          transaction_desc:element.transaction_desc,
          createdDate: element.createdAt,
          updatedDate: element.updatedAt,
          transaction_way:element.transaction_way,
          transaction_amount:element.transaction_amount,
          transaction_balance:element && element.transaction_balance == 0 ? "0" : element.transaction_balance,
          system_date:element.system_date,
          _id:element._id,
          
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


  // exportAsXLSX(): void {
  //   let new_list = this.dataSource.filteredData.map(function(obj) {
  //     return {
  //       "User Name": obj.username,
  //       "User Email":obj.user_email,
  //       "User Phone":obj.user_phone,
  //       // "User Type":obj.user_type,
  //       "Created Date":new Date(obj.createdDate),
  //       "Updated Date":new Date(obj.updatedDate),
  //     }
  //   });
  //   this.exportToExcelService.exportAsExcelFile(new_list, "User Details",);
  // }



  public deleteRecord(recordId){
   
  }

  public viewRecord(){
    
  }

 

}


