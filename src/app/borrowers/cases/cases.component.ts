import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Guid } from 'guid-typescript';
import { BorrowerService } from '../borrower.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _ser:BorrowerService,private _fb:FormBuilder) { }

  id:any;
  profile:any;
  loan:number;
  paid:number;
  balance:number;
  caseId:string;
  allCases:any;
  caseDates:any;
  isEditReady:boolean=false;
  updateAmt:number;
  updateDate:Date;
  

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
  
    this.borrowerData(this.id);

    this.loan=0;
    this.paid=0;
    this.balance=0;
    
    this.formInit();
    this.loadCases(-1);
    
    
  }
  data:any;
  borrowerData(id:any)
  {
    this.data=this._ser.GetBorrowerData(id).subscribe(res=>{
     
      this.profile=res["profile"][0];
     
    });
  }
  newCase:FormGroup;
  formInit()
  {
    this.newCase=this._fb.group({
      borrowerid:[this.id],
      amount:[0,Validators.required],
      returnAmt:[0,Validators.required],
      term:['',Validators.required],
      terminDays:[0,Validators.required],
      Remark:[],
      givenDate:['',Validators.required],
      CaseId:[this.caseId]
    });
  }
saveForm()
{
  if(this.newCase.invalid)
  {
    alert("Fill the case Form All Input");
    return;
  }
  this.caseId=Guid.create().toString().substr(0,6).toUpperCase();
  this.newCase.patchValue({
    CaseId:this.caseId
  });
  let data=this.newCase.getRawValue();
  this._ser.GiveLoan(data).subscribe(res=>{
    alert(JSON.stringify(res));
    this.loadCases(this.id);
    this.newCase.reset();
  })
}
gettenure(e:any)
{
this.newCase.patchValue({
  terminDays:parseInt(e.target.value)
});
}
loadCases(id:any)
{
  this._ser.getAllCases(this.id).subscribe(res=>{
    this.allCases=res;
    
  })
  
}
returnAmt:number;
loanAmt:number;
sancDate:Date;
loadDates(caseId:any,loanAmt:number,returnAmt:number,sancDate:Date)
{
  this.returnAmt=returnAmt;
  this.loanAmt=loanAmt;
  this.sancDate=sancDate;
  this._ser.getCasesDates(caseId).subscribe(res=>{
    
    this.caseDates=res;
  })
}
IsEditdata:boolean=false;
Editdata()
{
  this.IsEditdata=!this.IsEditdata;
 
}
UpdateData()
{
  
// alert(this.rowamt);
// alert(this.rowId);
// alert(this.rowDate);
// alert(this.caseId);
var cnfm=confirm("Are You Sure Want To Update Record?");
if(cnfm)
{
let data={
  "caseId": this.caseId,
  "id": this.rowId,
  "returnDate": this.rowDate,
  "returnAmt": this.rowamt
};
this._ser.updateCaseRecord(data).subscribe(res=>{
  alert(res["message"]);
  this.loadDates(this.caseId,0,0,this.rowDate);
  this.IsEditdata=!this.IsEditdata;
});

}
else{
  alert("Thank You Have a Nice day");
}
}
rowId:any;
rowamt:number;
rowDate:Date;

listenAmtChange(id:any,type:any,e:any,caseId:any)
{
  //alert(id);
  //alert(type);
//alert(e.target.value);
this.rowId=id;
this.rowamt=e.target.value;
this.caseId=caseId;

}
listendateChange(id:any,type:any,e:any,caseId:any)
{
  this.rowId=id;
  this.rowDate=e.target.value;
  this.caseId=caseId;
  ///alert(id);
  //alert(type);
//alert(e.target.value);
}


}
