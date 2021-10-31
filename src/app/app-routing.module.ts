import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowerDataComponent } from './borrowers/borrower-data/borrower-data.component';
import { CasesComponent } from './borrowers/cases/cases.component';

const routes: Routes = [
  {
    path:'',
    component:BorrowerDataComponent
  },
  {
  path:'cases/:id',
  component:CasesComponent
},{
  path:'borrower',
  component:BorrowerDataComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
