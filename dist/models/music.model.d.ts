import { Entity } from '@loopback/repository';
import { MusicPlaylist } from './music-playlist.model';
export declare class Music extends Entity {
    id?: number;
    style: string;
    name: string;
    time: number;
    musicPlaylists: MusicPlaylist[];
    albumId?: number;
    constructor(data?: Partial<Music>);
}
export interface MusicRelations {
}
export declare type MusicWithRelations = Music & MusicRelations;
