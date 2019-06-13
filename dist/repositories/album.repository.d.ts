import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Album, AlbumRelations, Music } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { MusicRepository } from './music.repository';
export declare class AlbumRepository extends DefaultCrudRepository<Album, typeof Album.prototype.id, AlbumRelations> {
    protected musicRepositoryGetter: Getter<MusicRepository>;
    readonly music: HasManyRepositoryFactory<Music, typeof Album.prototype.id>;
    constructor(dataSource: DbDataSource, musicRepositoryGetter: Getter<MusicRepository>);
}
