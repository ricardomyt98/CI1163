import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
} from '@loopback/rest';
import {
  User,
  PlaylistFolder,
} from '../models';
import {UserRepository} from '../repositories';

export class UserPlaylistFolderController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/playlist-folder', {
    responses: {
      '200': {
        description: 'PlaylistFolder belonging to User',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': PlaylistFolder } },
          },
        },
      },
    },
  })
  async getPlaylistFolder(
    @param.path.number('id') id: typeof User.prototype.id,
  ): Promise<PlaylistFolder> {
    return await this.userRepository.playlistFolder(id);
  }
}
