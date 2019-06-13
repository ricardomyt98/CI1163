import { User, PlaylistFolder } from '../models';
import { UserRepository } from '../repositories';
export declare class UserPlaylistFolderController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    getPlaylistFolder(id: typeof User.prototype.id): Promise<PlaylistFolder>;
}
