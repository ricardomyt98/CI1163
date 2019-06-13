import {Entity, model, property, hasMany} from '@loopback/repository';
import {Music} from './music.model';

@model({settings: {}})
export class Album extends Entity {
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
  bandName: string;

  @property({
    type: 'string',
    required: true,
  })
  style: string;

  @hasMany(() => Music)
  music: Music[];

  constructor(data?: Partial<Album>) {
    super(data);
  }
}

export interface AlbumRelations {
  // describe navigational properties here
}

export type AlbumWithRelations = Album & AlbumRelations;
