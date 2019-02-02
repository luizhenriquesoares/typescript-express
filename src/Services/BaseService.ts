
import { BaseDomain } from '../Domains/BaseDomain';
import { injectable, inject } from 'inversify';
import { IBaseRepository } from '../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import IBaseService from './Interfaces/IBaseService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import 'reflect-metadata';
import { ModelType, Typegoose } from 'typegoose';
import { IDbContext } from '../Insfrastructure/Repositories/Interfaces/IDbContext';
// import { BaseRepository } from '../Insfrastructure/CrossCutting/DI/Decorators';
import { BaseRepository } from '../Insfrastructure/Repositories/BaseRepository';
import { DbContext } from '../Insfrastructure/CrossCutting/DI/Decorators';
@injectable()
export class BaseService<T extends Typegoose> extends BaseRepository implements IBaseService<T>{

    protected _MODEL: ModelType<T>;

    constructor(@DbContext protected _DbContext: IDbContext<T>) {
        super();
        console.log('============ BASE SERVICE ===============');
        this._CONTEXT = this._DbContext;
    }

    findAllAsync(): Promise<T> {
        throw new Error('Method not implemented.');
    }
    findOneAsync(){
        this._DbContext.setContext(this._MODEL);
        console.log('================ Base Service ============');
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
