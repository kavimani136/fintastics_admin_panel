import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonConstants } from 'src/app/common/common.constant';
import { HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminModulesService {

  constructor(private http:HttpClient) { }

  // User MANAGEMENT API LIST STARTS HERE //

  getUserList(){
    return this.http.get(CommonConstants.WEBAPI_URL+'userdetails/getlist')
  }

  getFilterDatas(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'userdetails/getFilterDatas',data)
  }


  getChildUserList(parent_of:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'userdetails/fetch_child',{parent_of})
  }

  getUserInfo(id:any){
    return this.http.get(CommonConstants.WEBAPI_URL+'userdetails/getby_id/'+id);
  }

  createUser(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'userdetails/create',data);
  }

  updateUser(data:any){
    return this.http.put(CommonConstants.WEBAPI_URL+'userdetails/update/'+data.id,data)
  }

  deleteUser(id:any){
    return this.http.delete(CommonConstants.WEBAPI_URL+'userdetails/delete/'+id);
  }

  searchUserList(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'userdetails/search',data)
  }


  // User MANAGEMENT API LIST ENDEDS HERE //

  getTransactionList(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'transaction/accountsummery/data',data)
  }

 
  getDasboardList(){
    return this.http.get(CommonConstants.WEBAPI_URL+'dashboard_details/getlist')
  }


  creatPaymentType(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'payment_type/create',data);
  }
  getPaymentTypeList(){
    return this.http.get(CommonConstants.WEBAPI_URL+'payment_type/getlist')
  }
  updatePaymentType(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'payment_type/edit/',data)
  }
  deletePayment(_id:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'payment_type/delete/',{_id});
  }



  creatDescriptionType(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'desc_type/create',data);
  }

  updateDescriptionType(data:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'desc_type/edit/',data)
  }

  getTransactionDescriptionList(){
    return this.http.get(CommonConstants.WEBAPI_URL+'desc_type/getlist')
  }

  deleteDescription(_id:any){
    return this.http.post(CommonConstants.WEBAPI_URL+'desc_type/delete/',{_id});
  }


    
}
