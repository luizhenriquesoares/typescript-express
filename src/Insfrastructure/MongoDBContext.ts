import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { injectable } from 'inversify';
import { BaseDomain } from 'src/Domains/BaseDomain';
import { IWrite } from './Repositories/Interfaces/IWrite';
import { IRead } from './Repositories/Interfaces/IRead';
import 'reflect-metadata';

@injectable()
export class MongoDBContext<TDomain extends BaseDomain> implements IWrite<TDomain>, IRead<TDomain> {

    find(item: TDomain): Promise<TDomain[]> {
        throw new Error('Method not implemented.');
    }

    findOne(id: bigint): Promise<TDomain> {
        throw new Error('Method not implemented.');
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
