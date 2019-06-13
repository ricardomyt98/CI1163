import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  PlaylistFolder,
  Playlist,
} from '../models';
import {PlaylistFolderRepository} from '../repositories';

export class PlaylistFolderPlaylistController {
  constructor(
    @repository(PlaylistFolderRepository) protected playlistFolderRepository: PlaylistFolderRepository,
  ) { }

  @get('/playlist-folders/{id}/playlists', {
    responses: {
      '200': {
        description: 'Array of Playlist\'s belonging to PlaylistFolder',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Playlist } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Playlist>,
  ): Promise<Playlist[]> {
    return await this.playlistFolderRepository.playlists(id).find(filter);
  }

  @post('/playlist-folders/{id}/playlists', {
    responses: {
      '200': {
        description: 'PlaylistFolder model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Playlist } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof PlaylistFolder.prototype.id,
    @requestBody() playlist: Playlist,
  ): Promise<Playlist> {
    return await this.playlistFolderRepository.playlists(id).create(playlist);
  }

  @patch('/playlist-folders/{id}/playlists', {
    responses: {
      '200': {
        description: 'PlaylistFolder.Playlist PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() playlist: Partial<Playlist>,
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.playlistFolderRepository.playlists(id).patch(playlist, where);
  }

  @del('/playlist-folders/{id}/playlists', {
    responses: {
      '200': {
        description: 'PlaylistFolder.Playlist DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.playlistFolderRepository.playlists(id).delete(where);
  }
}
