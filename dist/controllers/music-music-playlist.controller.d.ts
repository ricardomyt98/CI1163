import { Count, Filter, Where } from '@loopback/repository';
import { Music, MusicPlaylist } from '../models';
import { MusicRepository } from '../repositories';
export declare class MusicMusicPlaylistController {
    protected musicRepository: MusicRepository;
    constructor(musicRepository: MusicRepository);
    find(id: number, filter?: Filter<MusicPlaylist>): Promise<MusicPlaylist[]>;
    create(id: typeof Music.prototype.id, musicPlaylist: MusicPlaylist): Promise<MusicPlaylist>;
    patch(id: number, musicPlaylist: Partial<MusicPlaylist>, where?: Where<MusicPlaylist>): Promise<Count>;
    delete(id: number, where?: Where<MusicPlaylist>): Promise<Count>;
}
