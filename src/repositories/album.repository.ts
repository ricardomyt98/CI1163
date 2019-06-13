import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Album, AlbumRelations, Music} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {MusicRepository} from './music.repository';

export class AlbumRepository extends DefaultCrudRepository<
  Album,
  typeof Album.prototype.id,
  AlbumRelations
> {

  public readonly music: HasManyRepositoryFactory<Music, typeof Album.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('MusicRepository') protected musicRepositoryGetter: Getter<MusicRepository>,
  ) {
    super(Album, dataSource);
    this.music = this.createHasManyRepositoryFactoryFor('music', musicRepositoryGetter,);
  }
}
