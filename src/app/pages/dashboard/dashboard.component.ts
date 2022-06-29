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
  viewBarChart: boolean = true;
  viewPieChart: boolean = false;
  viewgGuge: boolean = false;
  userdetailsTotalCount :any;
  familyAcType :any;
  personalAcType:any;
  transactionTotalCount :any;
  error: any;
  colorScheme: any;
  showLegend: boolean = true;
   showDataLabel: boolean = true;
   xAxisLabel = '';
   yAxisLabel = '';
   gradient = false;
   showXAxis = true;
   showYAxis = true;
   barPadding:number=10;
   legend: boolean = true;
   legendPosition: string = 'below';
   
   loading: boolean = false;
  chartList: any = [];
 
 

  constructor(private adminService:AdminModulesService,private router: Router,private cookieService: CookieService)
  {

   }

 ngOnInit() {
    // your color scheme
    this.colorScheme = {
      domain: [
        '#FF8A80', 
        '#EA80FC',
        '#8C9EFF', 
        '#80D8FF', 
        '#A7FFEB', 
        '#CCFF90', 
        '#FFFF8D', 
        '#FF9E80'
      ]
    };
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

      
      var obj1 = {
        name:"User Details Total",
        value:this.userdetailsTotalCount
      }

      var obj2 = {
        name:"Family Account Type",
        value:this.familyAcType
      }

      var obj3 = {
        name:"Personal Account Type",
        value:this.personalAcType
      }

      var obj4 = {
        name:"Transaction Total",
        value:this.transactionTotalCount
      }
          

      // setTimeout(() => {
        var list = [];
        list.push(obj1); 
          list.push(obj2); 
          list.push(obj3); 
          list.push(obj4); 
          this.chartList = list;
          console.log("chartList",this.chartList)
      // },2000);

       


    },error => {
      this.error = error;
    });



 }

 userStatus(status){
  
 
 }


 pieChart() {
  this.viewBarChart = false;
  this.viewPieChart = true;
  this.viewgGuge = false;
}


barChart() {
  this.viewBarChart = true;
  this.viewPieChart = false;
  this.viewgGuge = false;
}

gauge() {
  this.viewBarChart = false;
  this.viewPieChart = false;
  this.viewgGuge = true;
}

}
