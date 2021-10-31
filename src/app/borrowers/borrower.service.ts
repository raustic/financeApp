import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BorrowerService {
 // baseUrl:string='http://localhost:3000';
 baseUrl:string='http://18.222.177.27:3000'
  constructor(private _http:HttpClient) { }

  public list():Observable<any>
  {
    let url="/admin/borrowers/-2/2";
    return this._http.get(this.baseUrl+url);
  }

  public create(postData:any):Observable<any>
  {
    let url="/admin/createborrower";
   let data={
    "id": 0,
    "name": postData.name,
    "mobile": postData.mobile,
    "watsappNumber": "",
    "email": "",
    "addressLine1": postData.addressLine1,
    "addressLine2": "",
    "zip": "0",
    "state": "",
    "ReferencedBy": "admin",
    "CreatedBy": "",
    "CreatedAt": "",
    "IsActive": 0,
    "Designation": "",
    "ProfileImg": "",
    "aadharfrontImg": "",
    "aadharbackImg": "",
    "otherImg": ""
  }
  return this._http.post(this.baseUrl+url,data);
  }

  public GetBorrowerData(id:any):Observable<any>
  {
    let url=`/admin/borrowers/${id}/2`;
    return this._http.get(this.baseUrl+url);
  }
  public GiveLoan(postData:any):Observable<any>
  {
    let url="/admin/GiveborrowerTrans";
   
    let data={
      "id": 0,
      "borrowerid":postData.borrowerid ,
      "amount": postData.amount,
      "returnAmt": postData.returnAmt,
      "term": postData.term,
      "terminDays": postData.terminDays,
      "Remark": postData.Remark,
      "createdAt": "2021-10-29T07:44:23.314Z",
      "createdBy": "string",
      "Partner1Mobile": "string",
      "Partner1Name": "string",
      "Partner1Amount": "string",
      "Partner1PerOrRate": "string",
      "Partner2Mobile": "string",
      "Partner2Name": "string",
      "Partner2Amount": "string",
      "Partner2PerOrRate": "string",
      "Partner3Mobile": "string",
      "Partner3Name": "string",
      "Partner3Amount": "string",
      "Partner3PerOrRate": "string",
      "Partner4Mobile": "string",
      "Partner4Name": "string",
      "Partner4Amount": "string",
      "Partner4PerOrRate": "string",
      "Partner5Mobile": "string",
      "Partner5Name": "string",
      "Partner5Amount": "string",
      "Partner5PerOrRate": "string",
      "Role": "string",
      "givenDate":postData.givenDate,
      "CaseId": postData.CaseId,
      "RoleId": 0
    }
    
    return this._http.post(this.baseUrl+url,data);
  }

  public getAllCases(id:number):Observable<any>
  {
    let url=this.baseUrl+`/admin/cases/${id}`;
    return this._http.get(url)
  }
  public getCasesDates(caseId:any):Observable<any>
  {
    let url=`/admin/casesDates/${caseId}`;
    return this._http.get(this.baseUrl+url);
  }
  public updateCaseRecord(data:any):Observable<any>
  {
    let url='/admin/UpdatdeCaseDate';
    return this._http.post(this.baseUrl+url,data);
  }
}
