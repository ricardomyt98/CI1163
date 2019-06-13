import { Count, Filter, Where } from '@loopback/repository';
import { MusicPlaylist } from '../models';
import { MusicPlaylistRepository } from '../repositories';
export declare class MusicPlaylistController {
    musicPlaylistRepository: MusicPlaylistRepository;
    constructor(musicPlaylistRepository: MusicPlaylistRepository);
    create(musicPlaylist: MusicPlaylist): Promise<MusicPlaylist>;
    count(where?: Where<MusicPlaylist>): Promise<Count>;
    find(filter?: Filter<MusicPlaylist>): Promise<MusicPlaylist[]>;
    updateAll(musicPlaylist: MusicPlaylist, where?: Where<MusicPlaylist>): Promise<Count>;
    findById(id: number): Promise<MusicPlaylist>;
    updateById(id: number, musicPlaylist: MusicPlaylist): Promise<void>;
    replaceById(id: number, musicPlaylist: MusicPlaylist): Promise<void>;
    deleteById(id: number): Promise<void>;
}
