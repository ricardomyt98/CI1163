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
  MusicPlaylist,
  Playlist,
} from '../models';
import {MusicPlaylistRepository} from '../repositories';

export class MusicPlaylistPlaylistController {
  constructor(
    @repository(MusicPlaylistRepository) protected musicPlaylistRepository: MusicPlaylistRepository,
  ) { }

  @get('/music-playlists/{id}/playlists', {
    responses: {
      '200': {
        description: 'Array of Playlist\'s belonging to MusicPlaylist',
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
    return await this.musicPlaylistRepository.playlists(id).find(filter);
  }

  @post('/music-playlists/{id}/playlists', {
    responses: {
      '200': {
        description: 'MusicPlaylist model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Playlist } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof MusicPlaylist.prototype.id,
    @requestBody() playlist: Playlist,
  ): Promise<Playlist> {
    return await this.musicPlaylistRepository.playlists(id).create(playlist);
  }

  @patch('/music-playlists/{id}/playlists', {
    responses: {
      '200': {
        description: 'MusicPlaylist.Playlist PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() playlist: Partial<Playlist>,
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.musicPlaylistRepository.playlists(id).patch(playlist, where);
  }

  @del('/music-playlists/{id}/playlists', {
    responses: {
      '200': {
        description: 'MusicPlaylist.Playlist DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.musicPlaylistRepository.playlists(id).delete(where);
  }
}
