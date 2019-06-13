import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {User, UserRelations, PlaylistFolder} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PlaylistFolderRepository} from './playlist-folder.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly playlistFolder: BelongsToAccessor<PlaylistFolder, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PlaylistFolderRepository') protected playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>,
  ) {
    super(User, dataSource);
    this.playlistFolder = this.createBelongsToAccessorFor('playlistFolder', playlistFolderRepositoryGetter,);
  }
}
