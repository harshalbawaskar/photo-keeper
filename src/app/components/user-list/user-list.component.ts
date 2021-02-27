import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/types/user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private userListService: UserListService) {
  }

  ngOnInit(): void {
    this.userList = this.userListService.getUsers();
  }

}
