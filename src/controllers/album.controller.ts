import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Album} from '../models';
import {AlbumRepository} from '../repositories';

export class AlbumController {
  constructor(
    @repository(AlbumRepository)
    public albumRepository : AlbumRepository,
  ) {}

  @post('/albums', {
    responses: {
      '200': {
        description: 'Album model instance',
        content: {'application/json': {schema: {'x-ts-type': Album}}},
      },
    },
  })
  async create(@requestBody() album: Album): Promise<Album> {
    return await this.albumRepository.create(album);
  }

  @get('/albums/count', {
    responses: {
      '200': {
        description: 'Album model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Album)) where?: Where<Album>,
  ): Promise<Count> {
    return await this.albumRepository.count(where);
  }

  @get('/albums', {
    responses: {
      '200': {
        description: 'Array of Album model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Album}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Album)) filter?: Filter<Album>,
  ): Promise<Album[]> {
    return await this.albumRepository.find(filter);
  }

  @patch('/albums', {
    responses: {
      '200': {
        description: 'Album PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() album: Album,
    @param.query.object('where', getWhereSchemaFor(Album)) where?: Where<Album>,
  ): Promise<Count> {
    return await this.albumRepository.updateAll(album, where);
  }

  @get('/albums/{id}', {
    responses: {
      '200': {
        description: 'Album model instance',
        content: {'application/json': {schema: {'x-ts-type': Album}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Album> {
    return await this.albumRepository.findById(id);
  }

  @patch('/albums/{id}', {
    responses: {
      '204': {
        description: 'Album PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() album: Album,
  ): Promise<void> {
    await this.albumRepository.updateById(id, album);
  }

  @put('/albums/{id}', {
    responses: {
      '204': {
        description: 'Album PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() album: Album,
  ): Promise<void> {
    await this.albumRepository.replaceById(id, album);
  }

  @del('/albums/{id}', {
    responses: {
      '204': {
        description: 'Album DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.albumRepository.deleteById(id);
  }
}
