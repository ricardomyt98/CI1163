import { Entity } from '@loopback/repository';
import { Playlist } from './playlist.model';
export declare class MusicPlaylist extends Entity {
    id?: number;
    playlists: Playlist[];
    playlistId?: number;
    musicId?: number;
    constructor(data?: Partial<MusicPlaylist>);
}
export interface MusicPlaylistRelations {
}
export declare type MusicPlaylistWithRelations = MusicPlaylist & MusicPlaylistRelations;
