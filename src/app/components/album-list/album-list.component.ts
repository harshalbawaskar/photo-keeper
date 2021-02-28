import { Component, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/core';

import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[];

  selectedAlbums: Album[] = [];
  userId: string;

  constructor(private photoAlbumService: PhotoAlbumService,
    private stateService: StateService,
    private uiRouterGlobals: UIRouterGlobals) { }

  ngOnInit(): void {
    this.userId = this.uiRouterGlobals.params.userId;
    this.photoAlbumService.getAlbums(this.userId).subscribe((albums: Album[]) => {
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
    const albumIds = this.selectedAlbums.map(al => al.id).join('-');
    this.stateService.go('photos', {
      userId: this.userId,
      albumIds 
    })
  }
}
