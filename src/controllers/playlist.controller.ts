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
import {Playlist} from '../models';
import {PlaylistRepository} from '../repositories';

export class PlaylistController {
  constructor(
    @repository(PlaylistRepository)
    public playlistRepository : PlaylistRepository,
  ) {}

  @post('/playlists', {
    responses: {
      '200': {
        description: 'Playlist model instance',
        content: {'application/json': {schema: {'x-ts-type': Playlist}}},
      },
    },
  })
  async create(@requestBody() playlist: Playlist): Promise<Playlist> {
    return await this.playlistRepository.create(playlist);
  }

  @get('/playlists/count', {
    responses: {
      '200': {
        description: 'Playlist model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.playlistRepository.count(where);
  }

  @get('/playlists', {
    responses: {
      '200': {
        description: 'Array of Playlist model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Playlist}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Playlist)) filter?: Filter<Playlist>,
  ): Promise<Playlist[]> {
    return await this.playlistRepository.find(filter);
  }

  @patch('/playlists', {
    responses: {
      '200': {
        description: 'Playlist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() playlist: Playlist,
    @param.query.object('where', getWhereSchemaFor(Playlist)) where?: Where<Playlist>,
  ): Promise<Count> {
    return await this.playlistRepository.updateAll(playlist, where);
  }

  @get('/playlists/{id}', {
    responses: {
      '200': {
        description: 'Playlist model instance',
        content: {'application/json': {schema: {'x-ts-type': Playlist}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Playlist> {
    return await this.playlistRepository.findById(id);
  }

  @patch('/playlists/{id}', {
    responses: {
      '204': {
        description: 'Playlist PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() playlist: Playlist,
  ): Promise<void> {
    await this.playlistRepository.updateById(id, playlist);
  }

  @put('/playlists/{id}', {
    responses: {
      '204': {
        description: 'Playlist PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() playlist: Playlist,
  ): Promise<void> {
    await this.playlistRepository.replaceById(id, playlist);
  }

  @del('/playlists/{id}', {
    responses: {
      '204': {
        description: 'Playlist DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.playlistRepository.deleteById(id);
  }
}
