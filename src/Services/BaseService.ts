
import { BaseDomain } from '../Domains/BaseDomain';
import { injectable, inject } from 'inversify';
import { IBaseRepository } from '../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import IBaseService from './Interfaces/IBaseService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import 'reflect-metadata';
import { ModelType, Typegoose } from 'typegoose';

@injectable()
export class BaseService<T extends Typegoose> implements IBaseService<T> {

    protected readonly _REPOSITORY: IBaseRepository<T>;
    protected _MODEL: ModelType<T>;
    static _INSTANCE;

    constructor(@inject(TYPES.IBaseRepository) baseRepository: IBaseRepository<T>) {
        this._REPOSITORY = baseRepository;
        if (!BaseService._INSTANCE) {
            BaseService._INSTANCE = this._MODEL;
        }
    }

   static getInstance() {
       if (null === BaseService._INSTANCE) {
           return BaseService._INSTANCE = BaseService._INSTANCE;
       }
    }

    findAllAsync(): Promise<T> {
        throw new Error('Method not implemented.');
    }
    findOneAsync(){
        console.log('================ Base Service ============');
        console.log(BaseService._INSTANCE);
        console.log(this._MODEL);
        // console.log(this._MODEL.modelName);
        // return 'd';
        return this._REPOSITORY.findOne();
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
