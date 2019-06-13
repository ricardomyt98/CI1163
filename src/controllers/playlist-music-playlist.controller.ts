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
  Playlist,
  MusicPlaylist,
} from '../models';
import {PlaylistRepository} from '../repositories';

export class PlaylistMusicPlaylistController {
  constructor(
    @repository(PlaylistRepository) protected playlistRepository: PlaylistRepository,
  ) { }

  @get('/playlists/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Array of MusicPlaylist\'s belonging to Playlist',
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
    return await this.playlistRepository.musicPlaylists(id).find(filter);
  }

  @post('/playlists/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Playlist model instance',
        content: { 'application/json': { schema: { 'x-ts-type': MusicPlaylist } } },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Playlist.prototype.id,
    @requestBody() musicPlaylist: MusicPlaylist,
  ): Promise<MusicPlaylist> {
    return await this.playlistRepository.musicPlaylists(id).create(musicPlaylist);
  }

  @patch('/playlists/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Playlist.MusicPlaylist PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() musicPlaylist: Partial<MusicPlaylist>,
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.playlistRepository.musicPlaylists(id).patch(musicPlaylist, where);
  }

  @del('/playlists/{id}/music-playlists', {
    responses: {
      '200': {
        description: 'Playlist.MusicPlaylist DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(MusicPlaylist)) where?: Where<MusicPlaylist>,
  ): Promise<Count> {
    return await this.playlistRepository.musicPlaylists(id).delete(where);
  }
}
