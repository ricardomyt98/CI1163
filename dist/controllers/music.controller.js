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
let MusicController = class MusicController {
    constructor(musicRepository) {
        this.musicRepository = musicRepository;
    }
    async create(music) {
        return await this.musicRepository.create(music);
    }
    async count(where) {
        return await this.musicRepository.count(where);
    }
    async find(filter) {
        return await this.musicRepository.find(filter);
    }
    async updateAll(music, where) {
        return await this.musicRepository.updateAll(music, where);
    }
    async findById(id) {
        return await this.musicRepository.findById(id);
    }
    async updateById(id, music) {
        await this.musicRepository.updateById(id, music);
    }
    async replaceById(id, music) {
        await this.musicRepository.replaceById(id, music);
    }
    async deleteById(id) {
        await this.musicRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/music', {
        responses: {
            '200': {
                description: 'Music model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Music } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Music]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "create", null);
__decorate([
    rest_1.get('/music/count', {
        responses: {
            '200': {
                description: 'Music model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Music))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "count", null);
__decorate([
    rest_1.get('/music', {
        responses: {
            '200': {
                description: 'Array of Music model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Music } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Music))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "find", null);
__decorate([
    rest_1.patch('/music', {
        responses: {
            '200': {
                description: 'Music PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Music))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Music, Object]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/music/{id}', {
        responses: {
            '200': {
                description: 'Music model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Music } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "findById", null);
__decorate([
    rest_1.patch('/music/{id}', {
        responses: {
            '204': {
                description: 'Music PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Music]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "updateById", null);
__decorate([
    rest_1.put('/music/{id}', {
        responses: {
            '204': {
                description: 'Music PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Music]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/music/{id}', {
        responses: {
            '204': {
                description: 'Music DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MusicController.prototype, "deleteById", null);
MusicController = __decorate([
    __param(0, repository_1.repository(repositories_1.MusicRepository)),
    __metadata("design:paramtypes", [repositories_1.MusicRepository])
], MusicController);
exports.MusicController = MusicController;
//# sourceMappingURL=music.controller.js.map