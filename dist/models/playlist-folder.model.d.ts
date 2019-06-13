import { Entity } from '@loopback/repository';
import { Playlist } from './playlist.model';
export declare class PlaylistFolder extends Entity {
    id?: number;
    userId: number;
    playlists: Playlist[];
    constructor(data?: Partial<PlaylistFolder>);
}
export interface PlaylistFolderRelations {
}
export declare type PlaylistFolderWithRelations = PlaylistFolder & PlaylistFolderRelations;
