import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {MusicPlaylist} from './music-playlist.model';
import {PlaylistFolder} from './playlist-folder.model';

@model({settings: {}})
export class Playlist extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  mainStyle: string;

  @property({
    type: 'string',
    required: true,
  })
  secStyle: string;

  @property({
    type: 'number',
  })
  playlistFolderId?: number;

  @hasMany(() => MusicPlaylist)
  musicPlaylists: MusicPlaylist[];

  @belongsTo(() => PlaylistFolder)
  playlistFoldereId: number;

  constructor(data?: Partial<Playlist>) {
    super(data);
  }
}

export interface PlaylistRelations {
  // describe navigational properties here
}

export type PlaylistWithRelations = Playlist & PlaylistRelations;
