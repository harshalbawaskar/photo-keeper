import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '../types/album';
import { Photo } from '../types/photo';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  getAlbums(userId: number): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.baseUrl}/users/${userId}/albums`);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }
}
