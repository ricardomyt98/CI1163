import { Count, Filter, Where } from '@loopback/repository';
import { Album, Music } from '../models';
import { AlbumRepository } from '../repositories';
export declare class AlbumMusicController {
    protected albumRepository: AlbumRepository;
    constructor(albumRepository: AlbumRepository);
    find(id: number, filter?: Filter<Music>): Promise<Music[]>;
    create(id: typeof Album.prototype.id, music: Music): Promise<Music>;
    patch(id: number, music: Partial<Music>, where?: Where<Music>): Promise<Count>;
    delete(id: number, where?: Where<Music>): Promise<Count>;
}
