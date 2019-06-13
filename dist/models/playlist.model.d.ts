import { Entity } from '@loopback/repository';
import { MusicPlaylist } from './music-playlist.model';
export declare class Playlist extends Entity {
    id?: number;
    name: string;
    mainStyle: string;
    secStyle: string;
    playlistFolderId?: number;
    musicPlaylists: MusicPlaylist[];
    playlistFoldereId: number;
    constructor(data?: Partial<Playlist>);
}
export interface PlaylistRelations {
}
export declare type PlaylistWithRelations = Playlist & PlaylistRelations;
