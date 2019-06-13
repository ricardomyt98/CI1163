import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  PlaylistFolder,
  User,
} from '../models';
import {PlaylistFolderRepository} from '../repositories';

export class PlaylistFolderUserController {
  constructor(
    @repository(PlaylistFolderRepository)
    public playlistFolderRepository: PlaylistFolderRepository,
  ) { }

  @get('/playlist-folders/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to PlaylistFolder',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': User } },
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof PlaylistFolder.prototype.id,
  ): Promise<User> {
    return await this.playlistFolderRepository.user(id);
  }
}
