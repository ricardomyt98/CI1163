import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {PlaylistFolder, PlaylistFolderRelations, User, Playlist} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {PlaylistRepository} from './playlist.repository';

export class PlaylistFolderRepository extends DefaultCrudRepository<
  PlaylistFolder,
  typeof PlaylistFolder.prototype.id,
  PlaylistFolderRelations
> {

  public readonly user: BelongsToAccessor<User, typeof PlaylistFolder.prototype.id>;

  public readonly playlists: HasManyRepositoryFactory<Playlist, typeof PlaylistFolder.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('PlaylistRepository') protected playlistRepositoryGetter: Getter<PlaylistRepository>,
  ) {
    super(PlaylistFolder, dataSource);
    this.playlists = this.createHasManyRepositoryFactoryFor('playlists', playlistRepositoryGetter,);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
