import { PlaylistFolder, User } from '../models';
import { PlaylistFolderRepository } from '../repositories';
export declare class PlaylistFolderUserController {
    playlistFolderRepository: PlaylistFolderRepository;
    constructor(playlistFolderRepository: PlaylistFolderRepository);
    getUser(id: typeof PlaylistFolder.prototype.id): Promise<User>;
}
