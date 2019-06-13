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
  Music,
  MusicPlaylist,
} from '../models';
import {MusicRepository} from '../repositories';

export class MusicMusicPlaylistController {
  constructor(
    @repository(MusicRepository) protected musicRepository: MusicRepository,
  ) { }

  @get('/music/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Array of MusicPlaylist\'s belonging to Music',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': MusicPlaylist } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<MusicPlaylist>,
  ): Promise<MusicPlaylist[]> {
    return await this.musicRepository.musicPlaylists(id).find(filter);
  }

  @post('/music/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Music model instance',
        content: { 'application/json': { schema: { 'x-ts-type': MusicPlaylist } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Music.prototype.id,
    @requestBody() musicPlaylist: MusicPlaylist,
  ): Promise<MusicPlaylist> {
    return await this.musicRepository.musicPlaylists(id).create(musicPlaylist);
  }

  @patch('/music/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Music.MusicPlaylist PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() musicPlaylist: Partial<MusicPlaylist>,
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.musicRepository.musicPlaylists(id).patch(musicPlaylist, where);
  }

  @del('/music/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Music.MusicPlaylist DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.musicRepository.musicPlaylists(id).delete(where);
  }
}
