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
import {Music} from '../models';
import {MusicRepository} from '../repositories';

export class MusicController {
  constructor(
    @repository(MusicRepository)
    public musicRepository : MusicRepository,
  ) {}

  @post('/music', {
    responses: {
      '200': {
        description: 'Music model instance',
        content: {'application/json': {schema: {'x-ts-type': Music}}},
      },
    },
  })
  async create(@requestBody() music: Music): Promise<Music> {
    return await this.musicRepository.create(music);
  }

  @get('/music/count', {
    responses: {
      '200': {
        description: 'Music model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Music)) where?: Where<Music>,
  ): Promise<Count> {
    return await this.musicRepository.count(where);
  }

  @get('/music', {
    responses: {
      '200': {
        description: 'Array of Music model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Music}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Music)) filter?: Filter<Music>,
  ): Promise<Music[]> {
    return await this.musicRepository.find(filter);
  }

  @patch('/music', {
    responses: {
      '200': {
        description: 'Music PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() music: Music,
    @param.query.object('where', getWhereSchemaFor(Music)) where?: Where<Music>,
  ): Promise<Count> {
    return await this.musicRepository.updateAll(music, where);
  }

  @get('/music/{id}', {
    responses: {
      '200': {
        description: 'Music model instance',
        content: {'application/json': {schema: {'x-ts-type': Music}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Music> {
    return await this.musicRepository.findById(id);
  }

  @patch('/music/{id}', {
    responses: {
      '204': {
        description: 'Music PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() music: Music,
  ): Promise<void> {
    await this.musicRepository.updateById(id, music);
  }

  @put('/music/{id}', {
    responses: {
      '204': {
        description: 'Music PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() music: Music,
  ): Promise<void> {
    await this.musicRepository.replaceById(id, music);
  }

  @del('/music/{id}', {
    responses: {
      '204': {
        description: 'Music DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.musicRepository.deleteById(id);
  }
}
