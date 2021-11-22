import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModulesService } from 'src/app/core/services/admin/admin-modules.service';
import { CookieService } from 'src/app/core/services/cookie.service';


type NewType = boolean;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard component - handling dashboard with sidear and content
 */
export class DashboardComponent implements OnInit {
  icon:any;
  color:any;
  
  userdetailsTotalCount :any;
  familyAcType :any;
  personalAcType:any;
  transactionTotalCount :any;
  error: any;
 
 

  constructor(private adminService:AdminModulesService,private router: Router,private cookieService: CookieService)
  {
    //  if(!JSON.parse(this.cookieService.getCookie('currentUser'))){
    //   this.router.navigate(['./']);
    //  }
   }

 ngOnInit() {
  this.getAllDasboardDetails();
 }

 getAllDasboardDetails(){
   debugger
  this.adminService.getDasboardList().pipe()
  .subscribe( data => {
      console.log("data2 ",data); 
      this.userdetailsTotalCount =data['Data'].userdetailsTotalCount;
      this.familyAcType =data['Data'].familyAcType;
      this.personalAcType =data['Data'].personalAcType;
      this.transactionTotalCount =data['Data'].transactionTotalCount;
    },error => {
      this.error = error;
    });
 }

 userStatus(status){
  
 
 }

}
