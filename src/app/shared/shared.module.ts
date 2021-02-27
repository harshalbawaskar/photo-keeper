import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [HeaderComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, TableComponent]
})
export class SharedModule { }
