import { Count, Filter, Where } from '@loopback/repository';
import { PlaylistFolder, Playlist } from '../models';
import { PlaylistFolderRepository } from '../repositories';
export declare class PlaylistFolderPlaylistController {
    protected playlistFolderRepository: PlaylistFolderRepository;
    constructor(playlistFolderRepository: PlaylistFolderRepository);
    find(id: number, filter?: Filter<Playlist>): Promise<Playlist[]>;
    create(id: typeof PlaylistFolder.prototype.id, playlist: Playlist): Promise<Playlist>;
    patch(id: number, playlist: Partial<Playlist>, where?: Where<Playlist>): Promise<Count>;
    delete(id: number, where?: Where<Playlist>): Promise<Count>;
}
