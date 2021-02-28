import { Component, OnInit } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/core';

import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  photos: Photo[];

  constructor(private photoAlbumService: PhotoAlbumService,
    private uiRouterGlobals: UIRouterGlobals) { }

  ngOnInit(): void {
    const albumIds = this.uiRouterGlobals.params.albumIds.split('-');
    this.photoAlbumService.getPhotos(albumIds[0]).subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }
}
