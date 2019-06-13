import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MusicPlaylist, MusicPlaylistRelations, Playlist } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PlaylistRepository } from './playlist.repository';
export declare class MusicPlaylistRepository extends DefaultCrudRepository<MusicPlaylist, typeof MusicPlaylist.prototype.id, MusicPlaylistRelations> {
    protected playlistRepositoryGetter: Getter<PlaylistRepository>;
    readonly playlists: HasManyRepositoryFactory<Playlist, typeof MusicPlaylist.prototype.id>;
    constructor(dataSource: DbDataSource, playlistRepositoryGetter: Getter<PlaylistRepository>);
}
