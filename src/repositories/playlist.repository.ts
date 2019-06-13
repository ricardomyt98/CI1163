import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Playlist, PlaylistRelations, MusicPlaylist, PlaylistFolder} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MusicPlaylistRepository} from './music-playlist.repository';
import {PlaylistFolderRepository} from './playlist-folder.repository';

export class PlaylistRepository extends DefaultCrudRepository<
  Playlist,
  typeof Playlist.prototype.id,
  PlaylistRelations
> {

  public readonly musicPlaylists: HasManyRepositoryFactory<MusicPlaylist, typeof Playlist.prototype.id>;

  public readonly playlistFolder: BelongsToAccessor<PlaylistFolder, typeof Playlist.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MusicPlaylistRepository') protected musicPlaylistRepositoryGetter: Getter<MusicPlaylistRepository>, @repository.getter('PlaylistFolderRepository') protected playlistFolderRepositoryGetter: Getter<PlaylistFolderRepository>,
  ) {
    super(Playlist, dataSource);
    this.playlistFolder = this.createBelongsToAccessorFor('playlistFoldere', playlistFolderRepositoryGetter,);
    this.musicPlaylists = this.createHasManyRepositoryFactoryFor('musicPlaylists', musicPlaylistRepositoryGetter,);
  }
}
