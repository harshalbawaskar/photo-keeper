import { Component, OnInit } from '@angular/core';

import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Album } from 'src/app/types/album';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[];

  selectedAlbums: Album[] = [];

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbumService.getAlbums(1).subscribe((albums: Album[]) => {
      this.albumList = albums;
    });
  }

  onAlbumSelect(album: Album) {
    const foundAlbum = this.selectedAlbums.find(abm => abm.id === album.id);
    if (foundAlbum) {
      this.selectedAlbums = this.selectedAlbums.filter(abm => abm.id !== album.id);
    } else {
      this.selectedAlbums.push(album);
    }
  }

  showPhotos() {
    // TODO: Navigate user to photos.
  }
}
