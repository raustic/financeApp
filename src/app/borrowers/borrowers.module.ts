import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowerDataComponent } from './borrower-data/borrower-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CasesComponent } from './cases/cases.component';



@NgModule({
  declarations: [
   BorrowerDataComponent,
   CasesComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[BorrowerDataComponent]
})
export class BorrowersModule { }
