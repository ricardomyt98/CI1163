import { Count, Filter, Where } from '@loopback/repository';
import { Playlist, MusicPlaylist } from '../models';
import { PlaylistRepository } from '../repositories';
export declare class PlaylistMusicPlaylistController {
    protected playlistRepository: PlaylistRepository;
    constructor(playlistRepository: PlaylistRepository);
    find(id: number, filter?: Filter<MusicPlaylist>): Promise<MusicPlaylist[]>;
    create(id: typeof Playlist.prototype.id, musicPlaylist: MusicPlaylist): Promise<MusicPlaylist>;
    patch(id: number, musicPlaylist: Partial<MusicPlaylist>, where?: Where<MusicPlaylist>): Promise<Count>;
    delete(id: number, where?: Where<MusicPlaylist>): Promise<Count>;
}
