import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { Playlist, PlaylistRelations, MusicPlaylist, PlaylistFolder } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { MusicPlaylistRepository } from './music-playlist.repository';
import { PlaylistFolderRepository } from './playlist-folder.repository';
export declare class PlaylistRepository extends DefaultCrudRepository<Playlist, typeof Playlist.prototype.id, PlaylistRelations> {
    protected musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>;
    protected playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>;
    readonly musicPlaylists: HasManyRepositoryFactory<MusicPlaylist, typeof Playlist.prototype.id>;
    readonly playlistFolder: BelongsToAccessor<PlaylistFolder, typeof Playlist.prototype.id>;
    constructor(dataSource: DbDataSource, musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>, playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>);
}
