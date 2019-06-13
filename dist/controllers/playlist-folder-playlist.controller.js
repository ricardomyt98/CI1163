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
let PlaylistFolderPlaylistController = class PlaylistFolderPlaylistController {
    constructor(playlistFolderRepository) {
        this.playlistFolderRepository = playlistFolderRepository;
    }
    async find(id, filter) {
        return await this.playlistFolderRepository.playlists(id).find(filter);
    }
    async create(id, playlist) {
        return await this.playlistFolderRepository.playlists(id).create(playlist);
    }
    async patch(id, playlist, where) {
        return await this.playlistFolderRepository.playlists(id).patch(playlist, where);
    }
    async delete(id, where) {
        return await this.playlistFolderRepository.playlists(id).delete(where);
    }
};
__decorate([
    rest_1.get('/playlist-folders/{id}/playlists', {
        responses: {
            '200': {
                description: 'Array of Playlist\'s belonging to PlaylistFolder',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Playlist } },
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
], PlaylistFolderPlaylistController.prototype, "find", null);
__decorate([
    rest_1.post('/playlist-folders/{id}/playlists', {
        responses: {
            '200': {
                description: 'PlaylistFolder model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Playlist } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_1.Playlist]),
    __metadata("design:returntype", Promise)
], PlaylistFolderPlaylistController.prototype, "create", null);
__decorate([
    rest_1.patch('/playlist-folders/{id}/playlists', {
        responses: {
            '200': {
                description: 'PlaylistFolder.Playlist PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Playlist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], PlaylistFolderPlaylistController.prototype, "patch", null);
__decorate([
    rest_1.del('/playlist-folders/{id}/playlists', {
        responses: {
            '200': {
                description: 'PlaylistFolder.Playlist DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Playlist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlaylistFolderPlaylistController.prototype, "delete", null);
PlaylistFolderPlaylistController = __decorate([
    __param(0, repository_1.repository(repositories_1.PlaylistFolderRepository)),
    __metadata("design:paramtypes", [repositories_1.PlaylistFolderRepository])
], PlaylistFolderPlaylistController);
exports.PlaylistFolderPlaylistController = PlaylistFolderPlaylistController;
//# sourceMappingURL=playlist-folder-playlist.controller.js.map