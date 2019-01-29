import { ModelType, InstanceType } from 'typegoose';
import { injectable } from 'inversify';
import { IWrite } from './Repositories/Interfaces/IWrite';
import { IRead } from './Repositories/Interfaces/IRead';
import 'reflect-metadata';
import { BaseDomain } from '../Domains/BaseDomain';

@injectable()
export class MongoDBContext<TDomain extends BaseDomain> implements IWrite<TDomain>, IRead<TDomain> {

    protected _MODEL: ModelType<TDomain>;

    find(item: TDomain): Promise<TDomain[]> {
        throw new Error('Method not implemented.');
    }

    async findOne(filter = {}): Promise<InstanceType<TDomain>> {
        return this._MODEL.findOne(filter).exec();
      }

    create(item: TDomain): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    update(id: bigint, item: TDomain): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }

}
