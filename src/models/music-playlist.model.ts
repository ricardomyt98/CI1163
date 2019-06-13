import {Entity, model, property, hasMany} from '@loopback/repository';
import {Playlist} from './playlist.model';

@model({settings: {}})
export class MusicPlaylist extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @hasMany(() => Playlist)
  playlists: Playlist[];

  @property({
    type: 'number',
  })
  playlistId?: number;

  @property({
    type: 'number',
  })
  musicId?: number;

  constructor(data?: Partial<MusicPlaylist>) {
    super(data);
  }
}

export interface MusicPlaylistRelations {
  // describe navigational properties here
}

export type MusicPlaylistWithRelations = MusicPlaylist & MusicPlaylistRelations;
