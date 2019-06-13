import { Count, Filter, Where } from '@loopback/repository';
import { Playlist } from '../models';
import { PlaylistRepository } from '../repositories';
export declare class PlaylistController {
    playlistRepository: PlaylistRepository;
    constructor(playlistRepository: PlaylistRepository);
    create(playlist: Playlist): Promise<Playlist>;
    count(where?: Where<Playlist>): Promise<Count>;
    find(filter?: Filter<Playlist>): Promise<Playlist[]>;
    updateAll(playlist: Playlist, where?: Where<Playlist>): Promise<Count>;
    findById(id: number): Promise<Playlist>;
    updateById(id: number, playlist: Playlist): Promise<void>;
    replaceById(id: number, playlist: Playlist): Promise<void>;
    deleteById(id: number): Promise<void>;
}
