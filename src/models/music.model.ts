import {Entity, model, property, hasMany} from '@loopback/repository';
import {MusicPlaylist} from './music-playlist.model';

@model({settings: {}})
export class Music extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  style: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  time: number;

  @hasMany(() => MusicPlaylist)
  musicPlaylists: MusicPlaylist[];

  @property({
    type: 'number',
  })
  albumId?: number;

  constructor(data?: Partial<Music>) {
    super(data);
  }
}

export interface MusicRelations {
  // describe navigational properties here
}

export type MusicWithRelations = Music & MusicRelations;
