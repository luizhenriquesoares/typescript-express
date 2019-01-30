import { ModelType, Typegoose } from 'typegoose';
import { injectable } from 'inversify';
import { BaseDomain } from '../Domains/BaseDomain';
import { IDbContext } from './Repositories/Interfaces/IDbContext';
import 'reflect-metadata';

@injectable()
export class MongoDBContext<TDomain extends Typegoose> implements IDbContext<BaseDomain> {

    protected _MODEL: ModelType<TDomain>;

    find(item: BaseDomain): Promise<BaseDomain[]> {
        throw new Error('Method not implemented.');
    }
    async findOne(): Promise<InstanceType<any>> {
        console.log('============== MONGO DBContext ==============');
        // TODO Criar Adptater para MongoContext
        // return await this._MODEL.findOne({});
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