import { Count, Filter, Where } from '@loopback/repository';
import { PlaylistFolder } from '../models';
import { PlaylistFolderRepository } from '../repositories';
export declare class PlaylistFolderController {
    playlistFolderRepository: PlaylistFolderRepository;
    constructor(playlistFolderRepository: PlaylistFolderRepository);
    create(playlistFolder: PlaylistFolder): Promise<PlaylistFolder>;
    count(where?: Where<PlaylistFolder>): Promise<Count>;
    find(filter?: Filter<PlaylistFolder>): Promise<PlaylistFolder[]>;
    updateAll(playlistFolder: PlaylistFolder, where?: Where<PlaylistFolder>): Promise<Count>;
    findById(id: number): Promise<PlaylistFolder>;
    updateById(id: number, playlistFolder: PlaylistFolder): Promise<void>;
    replaceById(id: number, playlistFolder: PlaylistFolder): Promise<void>;
    deleteById(id: number): Promise<void>;
}
