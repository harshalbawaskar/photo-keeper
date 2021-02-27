import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user-list/user/user.component';



@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UserListComponent],
})
export class ComponentsModule { }
