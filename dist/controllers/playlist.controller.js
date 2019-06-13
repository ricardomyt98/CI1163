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
let PlaylistController = class PlaylistController {
    constructor(playlistRepository) {
        this.playlistRepository = playlistRepository;
    }
    async create(playlist) {
        return await this.playlistRepository.create(playlist);
    }
    async count(where) {
        return await this.playlistRepository.count(where);
    }
    async find(filter) {
        return await this.playlistRepository.find(filter);
    }
    async updateAll(playlist, where) {
        return await this.playlistRepository.updateAll(playlist, where);
    }
    async findById(id) {
        return await this.playlistRepository.findById(id);
    }
    async updateById(id, playlist) {
        await this.playlistRepository.updateById(id, playlist);
    }
    async replaceById(id, playlist) {
        await this.playlistRepository.replaceById(id, playlist);
    }
    async deleteById(id) {
        await this.playlistRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/playlists', {
        responses: {
            '200': {
                description: 'Playlist model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Playlist } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Playlist]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "create", null);
__decorate([
    rest_1.get('/playlists/count', {
        responses: {
            '200': {
                description: 'Playlist model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Playlist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "count", null);
__decorate([
    rest_1.get('/playlists', {
        responses: {
            '200': {
                description: 'Array of Playlist model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Playlist } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Playlist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "find", null);
__decorate([
    rest_1.patch('/playlists', {
        responses: {
            '200': {
                description: 'Playlist PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Playlist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Playlist, Object]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/playlists/{id}', {
        responses: {
            '200': {
                description: 'Playlist model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Playlist } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "findById", null);
__decorate([
    rest_1.patch('/playlists/{id}', {
        responses: {
            '204': {
                description: 'Playlist PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Playlist]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "updateById", null);
__decorate([
    rest_1.put('/playlists/{id}', {
        responses: {
            '204': {
                description: 'Playlist PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Playlist]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/playlists/{id}', {
        responses: {
            '204': {
                description: 'Playlist DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlaylistController.prototype, "deleteById", null);
PlaylistController = __decorate([
    __param(0, repository_1.repository(repositories_1.PlaylistRepository)),
    __metadata("design:paramtypes", [repositories_1.PlaylistRepository])
], PlaylistController);
exports.PlaylistController = PlaylistController;
//# sourceMappingURL=playlist.controller.js.map