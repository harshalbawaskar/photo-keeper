import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [HeaderComponent, TableComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, TableComponent, CardComponent]
})
export class SharedModule { }
