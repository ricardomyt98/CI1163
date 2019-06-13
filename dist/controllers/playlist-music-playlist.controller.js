"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PlaylistMusicPlaylistController = class PlaylistMusicPlaylistController {
    constructor(playlistRepository) {
        this.playlistRepository = playlistRepository;
    }
    async find(id, filter) {
        return await this.playlistRepository.musicPlaylists(id).find(filter);
    }
    async create(id, musicPlaylist) {
        return await this.playlistRepository.musicPlaylists(id).create(musicPlaylist);
    }
    async patch(id, musicPlaylist, where) {
        return await this.playlistRepository.musicPlaylists(id).patch(musicPlaylist, where);
    }
    async delete(id, where) {
        return await this.playlistRepository.musicPlaylists(id).delete(where);
    }
};
__decorate([
    rest_1.get('/playlists/{id}/music-playlists', {
        responses: {
            '200': {
                description: 'Array of MusicPlaylist\'s belonging to Playlist',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.MusicPlaylist } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlaylistMusicPlaylistController.prototype, "find", null);
__decorate([
    rest_1.post('/playlists/{id}/music-playlists', {
        responses: {
            '200': {
                description: 'Playlist model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.MusicPlaylist } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_1.MusicPlaylist]),
    __metadata("design:returntype", Promise)
], PlaylistMusicPlaylistController.prototype, "create", null);
__decorate([
    rest_1.patch('/playlists/{id}/music-playlists', {
        responses: {
            '200': {
                description: 'Playlist.MusicPlaylist PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MusicPlaylist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], PlaylistMusicPlaylistController.prototype, "patch", null);
__decorate([
    rest_1.del('/playlists/{id}/music-playlists', {
        responses: {
            '200': {
                description: 'Playlist.MusicPlaylist DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MusicPlaylist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlaylistMusicPlaylistController.prototype, "delete", null);
PlaylistMusicPlaylistController = __decorate([
    __param(0, repository_1.repository(repositories_1.PlaylistRepository)),
    __metadata("design:paramtypes", [repositories_1.PlaylistRepository])
], PlaylistMusicPlaylistController);
exports.PlaylistMusicPlaylistController = PlaylistMusicPlaylistController;
//# sourceMappingURL=playlist-music-playlist.controller.js.map