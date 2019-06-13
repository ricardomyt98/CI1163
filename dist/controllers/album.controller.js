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
let AlbumController = class AlbumController {
    constructor(albumRepository) {
        this.albumRepository = albumRepository;
    }
    async create(album) {
        return await this.albumRepository.create(album);
    }
    async count(where) {
        return await this.albumRepository.count(where);
    }
    async find(filter) {
        return await this.albumRepository.find(filter);
    }
    async updateAll(album, where) {
        return await this.albumRepository.updateAll(album, where);
    }
    async findById(id) {
        return await this.albumRepository.findById(id);
    }
    async updateById(id, album) {
        await this.albumRepository.updateById(id, album);
    }
    async replaceById(id, album) {
        await this.albumRepository.replaceById(id, album);
    }
    async deleteById(id) {
        await this.albumRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/albums', {
        responses: {
            '200': {
                description: 'Album model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Album } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Album]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "create", null);
__decorate([
    rest_1.get('/albums/count', {
        responses: {
            '200': {
                description: 'Album model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Album))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "count", null);
__decorate([
    rest_1.get('/albums', {
        responses: {
            '200': {
                description: 'Array of Album model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Album } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Album))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "find", null);
__decorate([
    rest_1.patch('/albums', {
        responses: {
            '200': {
                description: 'Album PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Album))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Album, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/albums/{id}', {
        responses: {
            '200': {
                description: 'Album model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Album } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findById", null);
__decorate([
    rest_1.patch('/albums/{id}', {
        responses: {
            '204': {
                description: 'Album PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Album]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "updateById", null);
__decorate([
    rest_1.put('/albums/{id}', {
        responses: {
            '204': {
                description: 'Album PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Album]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/albums/{id}', {
        responses: {
            '204': {
                description: 'Album DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "deleteById", null);
AlbumController = __decorate([
    __param(0, repository_1.repository(repositories_1.AlbumRepository)),
    __metadata("design:paramtypes", [repositories_1.AlbumRepository])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map