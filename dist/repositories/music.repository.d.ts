import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Music, MusicRelations, MusicPlaylist } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { MusicPlaylistRepository } from './music-playlist.repository';
export declare class MusicRepository extends DefaultCrudRepository<Music, typeof Music.prototype.id, MusicRelations> {
    protected musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>;
    readonly musicPlaylists: HasManyRepositoryFactory<MusicPlaylist, typeof Music.prototype.id>;
    constructor(dataSource: DbDataSource, musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>);
}
