import { inject } from 'inversify';
import { BaseDomain } from '../Domains/BaseDomain';
import { injectable } from 'inversify';
import { IBaseRepository } from '../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import IBaseService from './Interfaces/IBaseService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import 'reflect-metadata';

@injectable()
export class BaseService<TDomain extends BaseDomain> implements IBaseService<TDomain> {

    private readonly _REPOSITORY: IBaseRepository<TDomain>;

    constructor(@inject(TYPES.IBaseRepository) baseRepository: IBaseRepository<TDomain>) {
        this._REPOSITORY = baseRepository;
    }

    findAllAsync(): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
    async findOneAsync(): Promise<TDomain> {
        return await this._REPOSITORY.findOne();
    }
    findByIdAsync(id: string | bigint): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
    createAsync(obj: TDomain): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
    updateAsync(obj: TDomain): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
    deleteAsync(id: bigint): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
}
