import { Playlist, PlaylistFolder } from '../models';
import { PlaylistRepository } from '../repositories';
export declare class PlaylistPlaylistFolderController {
    playlistRepository: PlaylistRepository;
    constructor(playlistRepository: PlaylistRepository);
    getPlaylistFolder(id: typeof Playlist.prototype.id): Promise<PlaylistFolder>;
}
