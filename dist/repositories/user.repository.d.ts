import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { User, UserRelations, PlaylistFolder } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PlaylistFolderRepository } from './playlist-folder.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>;
    readonly playlistFolder: BelongsToAccessor<PlaylistFolder, typeof User.prototype.id>;
    constructor(dataSource: DbDataSource, playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>);
}
