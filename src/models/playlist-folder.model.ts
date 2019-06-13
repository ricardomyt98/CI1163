import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {Playlist} from './playlist.model';

@model({settings: {}})
export class PlaylistFolder extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @belongsTo(() => User)
  userId: number;

  @hasMany(() => Playlist)
  playlists: Playlist[];

  constructor(data?: Partial<PlaylistFolder>) {
    super(data);
  }
}

export interface PlaylistFolderRelations {
  // describe navigational properties here
}

export type PlaylistFolderWithRelations = PlaylistFolder & PlaylistFolderRelations;
