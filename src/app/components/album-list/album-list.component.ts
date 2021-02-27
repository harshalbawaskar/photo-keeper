import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "natus impedit quibusdam illo est"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "quibusdam autem aliquid et et quia"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
