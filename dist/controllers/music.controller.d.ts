import { Count, Filter, Where } from '@loopback/repository';
import { Music } from '../models';
import { MusicRepository } from '../repositories';
export declare class MusicController {
    musicRepository: MusicRepository;
    constructor(musicRepository: MusicRepository);
    create(music: Music): Promise<Music>;
    count(where?: Where<Music>): Promise<Count>;
    find(filter?: Filter<Music>): Promise<Music[]>;
    updateAll(music: Music, where?: Where<Music>): Promise<Count>;
    findById(id: number): Promise<Music>;
    updateById(id: number, music: Music): Promise<void>;
    replaceById(id: number, music: Music): Promise<void>;
    deleteById(id: number): Promise<void>;
}
