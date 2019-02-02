import { BaseDomain } from '../../Domains/BaseDomain';
import { injectable, inject, multiInject } from 'inversify';
import 'reflect-metadata';
import { IBaseRepository } from './Interfaces/IBaseRepository';
import { TYPES } from '../../Insfrastructure/CrossCutting/DI/Types';
import { IDbContext } from './Interfaces/IDbContext';
import { ModelType, Typegoose } from 'typegoose';
import { DbContext } from '../../Insfrastructure/CrossCutting/DI/Decorators';
// implements IBaseRepository<any>
@injectable()
export class BaseRepository {
    protected _CONTEXT: IDbContext<Typegoose>;

    find(item: any): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    findOne(){
        console.log('============== Base Repository FindONE ==============');
        return this._CONTEXT.findOne();
    }
    create(item: any): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
