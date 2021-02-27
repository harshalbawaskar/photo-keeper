import { AlbumListComponent } from "../components/album-list/album-list.component";
import { PhotoContainerComponent } from "../components/photo-container/photo-container.component";
import { UserListComponent } from "../components/user-list/user-list.component";

export const STATES = [
    { name: 'users', url: '/users',  component: UserListComponent },
    { name: 'albums', url: '/users/:userId/albums',  component: AlbumListComponent },
    { name: 'photos', url: '/users/:userId/albums/:albumIds/photos',  component: PhotoContainerComponent }
]