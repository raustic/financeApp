import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BorrowerService } from '../borrower.service';

@Component({
  selector: 'app-borrower-data',
  templateUrl: './borrower-data.component.html',
  styleUrls: ['./borrower-data.component.css']
})
export class BorrowerDataComponent implements OnInit {

  constructor(private _ser:BorrowerService,private _fb:FormBuilder,private _router:Router) { }
  list:Array<any>=[];
  ngOnInit(): void {

     this.LoadList();
     this.formInit();
  }

  form:FormGroup;
  formInit()
  {
    this.form=this._fb.group({
      name:[],
      mobile:[],
      addressLine1:[]
    });
  }
  saveForm()
  {

    try {
     
      this._ser.create(this.form.getRawValue()).subscribe(res=>{
     
      this.LoadList();
      });

    } catch (error) {
      alert(error);
    }
   
  }
  LoadList()
  {
    this._ser.list().subscribe(res=>{
      this.list=res;
      
    })  
  }
  cases(data:any)
  {
this._router.navigate([`/cases/${data}`]);
  }

}
