import { Entity } from '@loopback/repository';
import { Music } from './music.model';
export declare class Album extends Entity {
    id?: number;
    name: string;
    bandName: string;
    style: string;
    music: Music[];
    constructor(data?: Partial<Album>);
}
export interface AlbumRelations {
}
export declare type AlbumWithRelations = Album & AlbumRelations;
