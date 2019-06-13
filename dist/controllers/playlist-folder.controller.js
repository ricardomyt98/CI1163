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
let PlaylistFolderController = class PlaylistFolderController {
    constructor(playlistFolderRepository) {
        this.playlistFolderRepository = playlistFolderRepository;
    }
    async create(playlistFolder) {
        return await this.playlistFolderRepository.create(playlistFolder);
    }
    async count(where) {
        return await this.playlistFolderRepository.count(where);
    }
    async find(filter) {
        return await this.playlistFolderRepository.find(filter);
    }
    async updateAll(playlistFolder, where) {
        return await this.playlistFolderRepository.updateAll(playlistFolder, where);
    }
    async findById(id) {
        return await this.playlistFolderRepository.findById(id);
    }
    async updateById(id, playlistFolder) {
        await this.playlistFolderRepository.updateById(id, playlistFolder);
    }
    async replaceById(id, playlistFolder) {
        await this.playlistFolderRepository.replaceById(id, playlistFolder);
    }
    async deleteById(id) {
        await this.playlistFolderRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/playlist-folders', {
        responses: {
            '200': {
                description: 'PlaylistFolder model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.PlaylistFolder } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.PlaylistFolder]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "create", null);
__decorate([
    rest_1.get('/playlist-folders/count', {
        responses: {
            '200': {
                description: 'PlaylistFolder model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PlaylistFolder))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "count", null);
__decorate([
    rest_1.get('/playlist-folders', {
        responses: {
            '200': {
                description: 'Array of PlaylistFolder model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.PlaylistFolder } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.PlaylistFolder))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "find", null);
__decorate([
    rest_1.patch('/playlist-folders', {
        responses: {
            '200': {
                description: 'PlaylistFolder PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.PlaylistFolder))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.PlaylistFolder, Object]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/playlist-folders/{id}', {
        responses: {
            '200': {
                description: 'PlaylistFolder model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.PlaylistFolder } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "findById", null);
__decorate([
    rest_1.patch('/playlist-folders/{id}', {
        responses: {
            '204': {
                description: 'PlaylistFolder PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.PlaylistFolder]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "updateById", null);
__decorate([
    rest_1.put('/playlist-folders/{id}', {
        responses: {
            '204': {
                description: 'PlaylistFolder PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.PlaylistFolder]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/playlist-folders/{id}', {
        responses: {
            '204': {
                description: 'PlaylistFolder DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlaylistFolderController.prototype, "deleteById", null);
PlaylistFolderController = __decorate([
    __param(0, repository_1.repository(repositories_1.PlaylistFolderRepository)),
    __metadata("design:paramtypes", [repositories_1.PlaylistFolderRepository])
], PlaylistFolderController);
exports.PlaylistFolderController = PlaylistFolderController;
//# sourceMappingURL=playlist-folder.controller.js.map