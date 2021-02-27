import { Component, OnInit } from '@angular/core';

import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[];

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbumService.getAlbums(1).subscribe((albums: Album[]) => {
      this.albumList = albums;
    });
  }
}
