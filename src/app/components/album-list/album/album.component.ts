import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/types/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: Album;

  @Output()
  onAlbumSelect: EventEmitter<Album>;

  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onAlbumSelection() {
    this.onAlbumSelect.next(this.album);
  }
}
