import { BaseDomain } from '../Domains/BaseDomain';
import { injectable } from 'inversify';
import { BaseRepository } from '../Insfrastructure/Repositories/BaseRepository';
import 'reflect-metadata';
@injectable()

export class BaseService<TDomain extends BaseDomain> {

    private readonly _REPOSITORY: BaseRepository<TDomain>;

    constructor(repository: BaseRepository<TDomain>) {
        this._REPOSITORY = repository;
    }

    async findAllAsync(): Promise<TDomain[]> {
        return await Promise.resolve([]);
    }

    async findByIdAsync(id: bigint | string) {
        return 'Method not implemented';
        //return await this._REPOSITORY.findOne(id);
    }

    async createAsync(obj: TDomain) {
        return 'Method not implemented';
        //return await this._REPOSITORY.create(obj);
    }

    async updateAsync(obj: TDomain) {
        return 'Method not implemented';
        //return await this._REPOSITORY.update(obj.id, obj);
    }

    async deleteAsync(id: bigint) {
        return 'Method not implemented';
        //return await this._REPOSITORY.delete(id);
    }
}
