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
import {MusicPlaylist} from '../models';
import {MusicPlaylistRepository} from '../repositories';

export class MusicPlaylistController {
  constructor(
    @repository(MusicPlaylistRepository)
    public musicPlaylistRepository : MusicPlaylistRepository,
  ) {}

  @post('/music-playlists', {
    responses: {
      '200': {
        description: 'MusicPlaylist model instance',
        content: {'application/json': {schema: {'x-ts-type': MusicPlaylist}}},
      },
    },
  })
  async create(@requestBody() musicPlaylist: MusicPlaylist): Promise<MusicPlaylist> {
    return await this.musicPlaylistRepository.create(musicPlaylist);
  }

  @get('/music-playlists/count', {
    responses: {
      '200': {
        description: 'MusicPlaylist model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.musicPlaylistRepository.count(where);
  }

  @get('/music-playlists', {
    responses: {
      '200': {
        description: 'Array of MusicPlaylist model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': MusicPlaylist}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(MusicPlaylist)) filter?: Filter<MusicPlaylist>,
  ): Promise<MusicPlaylist[]> {
    return await this.musicPlaylistRepository.find(filter);
  }

  @patch('/music-playlists', {
    responses: {
      '200': {
        description: 'MusicPlaylist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() musicPlaylist: MusicPlaylist,
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.musicPlaylistRepository.updateAll(musicPlaylist, where);
  }

  @get('/music-playlists/{id}', {
    responses: {
      '200': {
        description: 'MusicPlaylist model instance',
        content: {'application/json': {schema: {'x-ts-type': MusicPlaylist}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<MusicPlaylist> {
    return await this.musicPlaylistRepository.findById(id);
  }

  @patch('/music-playlists/{id}', {
    responses: {
      '204': {
        description: 'MusicPlaylist PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() musicPlaylist: MusicPlaylist,
  ): Promise<void> {
    await this.musicPlaylistRepository.updateById(id, musicPlaylist);
  }

  @put('/music-playlists/{id}', {
    responses: {
      '204': {
        description: 'MusicPlaylist PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() musicPlaylist: MusicPlaylist,
  ): Promise<void> {
    await this.musicPlaylistRepository.replaceById(id, musicPlaylist);
  }

  @del('/music-playlists/{id}', {
    responses: {
      '204': {
        description: 'MusicPlaylist DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.musicPlaylistRepository.deleteById(id);
  }
}
