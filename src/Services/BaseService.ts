import { BaseDomain } from '../Domains/BaseDomain';
import { unmanaged, injectable, inject } from 'inversify';
import { BaseRepository } from '../Insfrastructure/Repositories/BaseRepository';
import { IBaseRepository } from '../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import 'reflect-metadata';

@injectable()
export class BaseService<TDomain extends BaseDomain, TRepository extends BaseRepository <TDomain>> {

    private readonly _REPOSITORY: IBaseRepository<TDomain>;

    constructor(repository: IBaseRepository<TDomain>) {
        this._REPOSITORY = repository;
    }

    async findAllAsync(): Promise<TDomain[]> {
        return await Promise.resolve([]);
    }

    async findOneAsync() {
        console.log('FINDONEASYNC');
        return await this._REPOSITORY.findOne();
    }

    async findByIdAsync(id: bigint | string) {
        return 'Method not implemented';
    }

    async createAsync(obj: TDomain) {
        return 'Method not implemented';
    }

    async updateAsync(obj: TDomain) {
        return 'Method not implemented';
    }

    async deleteAsync(id: bigint) {
        return 'Method not implemented';
    }
}
