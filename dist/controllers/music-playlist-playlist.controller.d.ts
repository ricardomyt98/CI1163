import { Count, Filter, Where } from '@loopback/repository';
import { MusicPlaylist, Playlist } from '../models';
import { MusicPlaylistRepository } from '../repositories';
export declare class MusicPlaylistPlaylistController {
    protected musicPlaylistRepository: MusicPlaylistRepository;
    constructor(musicPlaylistRepository: MusicPlaylistRepository);
    find(id: number, filter?: Filter<Playlist>): Promise<Playlist[]>;
    create(id: typeof MusicPlaylist.prototype.id, playlist: Playlist): Promise<Playlist>;
    patch(id: number, playlist: Partial<Playlist>, where?: Where<Playlist>): Promise<Count>;
    delete(id: number, where?: Where<Playlist>): Promise<Count>;
}
