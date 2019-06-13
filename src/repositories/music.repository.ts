import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Music, MusicRelations, MusicPlaylist} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MusicPlaylistRepository} from './music-playlist.repository';

export class MusicRepository extends DefaultCrudRepository<
  Music,
  typeof Music.prototype.id,
  MusicRelations
> {

  public readonly musicPlaylists: HasManyRepositoryFactory<MusicPlaylist, typeof Music.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MusicPlaylistRepository') protected musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>,
  ) {
    super(Music, dataSource);
    this.musicPlaylists = this.createHasManyRepositoryFactoryFor('musicPlaylists', musicPlaylistRepositoryGetter,);
  }
}
