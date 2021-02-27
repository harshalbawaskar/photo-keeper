import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user-list/user/user.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album-list/album/album.component';
import { PhotoContainerComponent } from './photo-container/photo-container.component';



@NgModule({
  declarations: [UserListComponent, UserComponent, AlbumListComponent, AlbumComponent, PhotoContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UserListComponent, AlbumListComponent, PhotoContainerComponent],
})
export class ComponentsModule { }
