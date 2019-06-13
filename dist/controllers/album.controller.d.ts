import { Count, Filter, Where } from '@loopback/repository';
import { Album } from '../models';
import { AlbumRepository } from '../repositories';
export declare class AlbumController {
    albumRepository: AlbumRepository;
    constructor(albumRepository: AlbumRepository);
    create(album: Album): Promise<Album>;
    count(where?: Where<Album>): Promise<Count>;
    find(filter?: Filter<Album>): Promise<Album[]>;
    updateAll(album: Album, where?: Where<Album>): Promise<Count>;
    findById(id: number): Promise<Album>;
    updateById(id: number, album: Album): Promise<void>;
    replaceById(id: number, album: Album): Promise<void>;
    deleteById(id: number): Promise<void>;
}
