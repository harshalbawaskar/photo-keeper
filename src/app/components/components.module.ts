import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { UIRouterModule } from '@uirouter/angular';
import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album-list/album/album.component';
import { PhotoContainerComponent } from './photo-container/photo-container.component';



@NgModule({
  declarations: [UserListComponent, UserComponent, AlbumListComponent, AlbumComponent, PhotoContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    UIRouterModule.forChild()
  ],
  exports: [UserListComponent, AlbumListComponent, PhotoContainerComponent],
})
export class ComponentsModule { }
