import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/core';
import { iif, Subscription, timer } from 'rxjs';
import { take } from "rxjs/operators";

import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit, OnDestroy {

  photos: Photo[];
  albumIds: string[];
  photosSubscription: Subscription;

  constructor(private photoAlbumService: PhotoAlbumService,
    private uiRouterGlobals: UIRouterGlobals) { }

  ngOnInit(): void {
    this.albumIds = this.uiRouterGlobals.params.albumIds.split('-');
    this.pollPhotos();
  }

  pollPhotos() {
    this.photosSubscription = iif(() => this.albumIds.length === 2,
      timer(0, 20000),
      timer(0).pipe(take(1))
    ).subscribe((emitCount: number) => {
      this.fetchPhotos(emitCount % 2);
    });
  }

  fetchPhotos(albumIdx: number) {
    const albumId = this.albumIds.length === 2 ? this.albumIds[albumIdx] : this.albumIds[0];

    this.photoAlbumService.getPhotos(albumId).subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }

  ngOnDestroy(): void {
    this.photosSubscription.unsubscribe();
  }
}
