import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  Playlist,
  PlaylistFolder,
} from '../models';
import {PlaylistRepository} from '../repositories';

export class PlaylistPlaylistFolderController {
  constructor(
    @repository(PlaylistRepository)
    public playlistRepository: PlaylistRepository,
  ) { }

  @get('/playlists/{id}/playlist-folder', {
    responses: {
      '200': {
        description: 'PlaylistFolder belonging to Playlist',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': PlaylistFolder } },
          },
        },
      },
    },
  })
  async getPlaylistFolder(
    @param.path.number('id') id: typeof Playlist.prototype.id,
  ): Promise<PlaylistFolder> {
    return await this.playlistRepository.playlistFolder(id);
  }
}
