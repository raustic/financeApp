import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowersModule } from './borrowers/borrowers.module';
import{HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BorrowersModule,
    HttpClientModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
