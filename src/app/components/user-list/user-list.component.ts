import { Component, OnInit } from '@angular/core';

import { PhotoAlbumService } from 'src/app/services/photo-album.service';

import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private photoAlbumService: PhotoAlbumService) {
  }

  ngOnInit(): void {
    this.photoAlbumService.getUsers().subscribe((users: User[]) => {
      this.userList = users;
    });
  }

}
