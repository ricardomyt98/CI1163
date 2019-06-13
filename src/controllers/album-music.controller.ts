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
  Album,
  Music,
} from '../models';
import {AlbumRepository} from '../repositories';

export class AlbumMusicController {
  constructor(
    @repository(AlbumRepository) protected albumRepository: AlbumRepository,
  ) { }

  @get('/albums/{id}/music', {
    responses: {
      '200': {
        description: 'Array of Music\'s belonging to Album',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Music } },
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Music>,
  ): Promise<Music[]> {
    return await this.albumRepository.music(id).find(filter);
  }

  @post('/albums/{id}/music', {
    responses: {
      '200': {
        description: 'Album model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Music } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Album.prototype.id,
    @requestBody() music: Music,
  ): Promise<Music> {
    return await this.albumRepository.music(id).create(music);
  }

  @patch('/albums/{id}/music', {
    responses: {
      '200': {
        description: 'Album.Music PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() music: Partial<Music>,
    @param.query.object('where', getWhereSchemaFor(Music)) where?: Where<Music>,
  ): Promise<Count> {
    return await this.albumRepository.music(id).patch(music, where);
  }

  @del('/albums/{id}/music', {
    responses: {
      '200': {
        description: 'Album.Music DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Music)) where?: Where<Music>,
  ): Promise<Count> {
    return await this.albumRepository.music(id).delete(where);
  }
}
