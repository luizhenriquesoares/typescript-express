
import { BaseDomain } from '../Domains/BaseDomain';
import { injectable, inject } from 'inversify';
import { IBaseRepository } from '../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import IBaseService from './Interfaces/IBaseService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import 'reflect-metadata';
import { ModelType, Typegoose } from 'typegoose';
import { BaseRepository } from '../Insfrastructure/Repositories/BaseRepository';
import { IDbContext } from '../Insfrastructure/Repositories/Interfaces/IDbContext';

@injectable()
export class BaseService<T extends Typegoose> extends BaseRepository<BaseDomain> implements IBaseService<T> {

    // protected readonly _REPOSITORY: IBaseRepository<T>;
    protected _MODEL: ModelType<T>;

    constructor(@inject(TYPES.IDbContext) DbContext: IDbContext<BaseDomain>) {
        super(DbContext);
        console.log('============ BASE SERVICE ===============');
    }

    findAllAsync(): Promise<T> {
        throw new Error('Method not implemented.');
    }
    findOneAsync(){
        console.log('================ Base Service ============');
        this._BASEMODEL = this._MODEL;
        return this.findOne();
    }
    findByIdAsync(id: string | bigint): Promise<T> {
        throw new Error('Method not implemented.');
    }
    createAsync(obj: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    updateAsync(obj: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    deleteAsync(id: bigint): Promise<T> {
        throw new Error('Method not implemented.');
    }
}
