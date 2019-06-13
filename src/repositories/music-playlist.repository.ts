import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MusicPlaylist, MusicPlaylistRelations, Playlist} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PlaylistRepository} from './playlist.repository';

export class MusicPlaylistRepository extends DefaultCrudRepository<
  MusicPlaylist,
  typeof MusicPlaylist.prototype.id,
  MusicPlaylistRelations
> {

  public readonly playlists: HasManyRepositoryFactory<Playlist, typeof MusicPlaylist.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PlaylistRepository') protected playlistRepositoryGetter: Getter<PlaylistRepository>,
  ) {
    super(MusicPlaylist, dataSource);
    this.playlists = this.createHasManyRepositoryFactoryFor('playlists', playlistRepositoryGetter,);
  }
}
