import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { PlaylistFolder, PlaylistFolderRelations, User, Playlist } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
import { PlaylistRepository } from './playlist.repository';
export declare class PlaylistFolderRepository extends DefaultCrudRepository<PlaylistFolder, typeof PlaylistFolder.prototype.id, PlaylistFolderRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    protected playlistRepositoryGetter: Getter<PlaylistRepository>;
    readonly user: BelongsToAccessor<User, typeof PlaylistFolder.prototype.id>;
    readonly playlists: HasManyRepositoryFactory<Playlist, typeof PlaylistFolder.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepository>, playlistRepositoryGetter: Getter<PlaylistRepository>);
}
