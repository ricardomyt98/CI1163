import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    login: string;
    password: string;
    plan: string;
    playlistFolderId: number;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
