import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  photos: Photo[];

  constructor(private photoAlbumService: PhotoAlbumService) { }

  ngOnInit(): void {
    this.photoAlbumService.getPhotos(1).subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }
}
