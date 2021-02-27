import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user-list/user/user.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album-list/album/album.component';



@NgModule({
  declarations: [UserListComponent, UserComponent, AlbumListComponent, AlbumComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UserListComponent, AlbumListComponent],
})
export class ComponentsModule { }
