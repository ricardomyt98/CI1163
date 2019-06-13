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
import {PlaylistFolder} from '../models';
import {PlaylistFolderRepository} from '../repositories';

export class PlaylistFolderController {
  constructor(
    @repository(PlaylistFolderRepository)
    public playlistFolderRepository : PlaylistFolderRepository,
  ) {}

  @post('/playlist-folders', {
    responses: {
      '200': {
        description: 'PlaylistFolder model instance',
        content: {'application/json': {schema: {'x-ts-type': PlaylistFolder}}},
      },
    },
  })
  async create(@requestBody() playlistFolder: PlaylistFolder): Promise<PlaylistFolder> {
    return await this.playlistFolderRepository.create(playlistFolder);
  }

  @get('/playlist-folders/count', {
    responses: {
      '200': {
        description: 'PlaylistFolder model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(PlaylistFolder)) where?: Where<PlaylistFolder>,
  ): Promise<Count> {
    return await this.playlistFolderRepository.count(where);
  }

  @get('/playlist-folders', {
    responses: {
      '200': {
        description: 'Array of PlaylistFolder model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': PlaylistFolder}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(PlaylistFolder)) filter?: Filter<PlaylistFolder>,
  ): Promise<PlaylistFolder[]> {
    return await this.playlistFolderRepository.find(filter);
  }

  @patch('/playlist-folders', {
    responses: {
      '200': {
        description: 'PlaylistFolder PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() playlistFolder: PlaylistFolder,
    @param.query.object('where', getWhereSchemaFor(PlaylistFolder)) where?: Where<PlaylistFolder>,
  ): Promise<Count> {
    return await this.playlistFolderRepository.updateAll(playlistFolder, where);
  }

  @get('/playlist-folders/{id}', {
    responses: {
      '200': {
        description: 'PlaylistFolder model instance',
        content: {'application/json': {schema: {'x-ts-type': PlaylistFolder}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<PlaylistFolder> {
    return await this.playlistFolderRepository.findById(id);
  }

  @patch('/playlist-folders/{id}', {
    responses: {
      '204': {
        description: 'PlaylistFolder PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() playlistFolder: PlaylistFolder,
  ): Promise<void> {
    await this.playlistFolderRepository.updateById(id, playlistFolder);
  }

  @put('/playlist-folders/{id}', {
    responses: {
      '204': {
        description: 'PlaylistFolder PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() playlistFolder: PlaylistFolder,
  ): Promise<void> {
    await this.playlistFolderRepository.replaceById(id, playlistFolder);
  }

  @del('/playlist-folders/{id}', {
    responses: {
      '204': {
        description: 'PlaylistFolder DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.playlistFolderRepository.deleteById(id);
  }
}
