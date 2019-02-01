import { Typegoose } from 'typegoose';
import { injectable, inject, multiInject } from 'inversify';
import { BaseDomain } from '../Domains/BaseDomain';
import { IDbContext } from './Repositories/Interfaces/IDbContext';
import 'reflect-metadata';
import { BaseService } from '../Services/BaseService';
import { IBaseRepository } from './Repositories/Interfaces/IBaseRepository';
import { TYPES } from './CrossCutting/DI/Types';
@injectable()
export class MongoDBContext<T extends Typegoose> implements IDbContext<BaseDomain> {

    protected _MONGODBCONTEXT;
    constructor() {
        console.log('================= CONSTRUCTOR MONGODBCONTEXT =================');
    }

    find(item: BaseDomain): Promise<BaseDomain[]> {
        throw new Error('Method not implemented.');
    }
    findOne() {
        console.log('============== MONGO DBContext ==============');
        // const result = this._MONGODBCONTEXT.findOne().exec();

        return 'DD';
    }
    create(item: BaseDomain): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: BaseDomain): Promise<InstanceType<any>> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}