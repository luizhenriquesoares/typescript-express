import { BaseDomain } from '../../Domains/BaseDomain';
import { IWrite } from './Interfaces/IWrite';
import { IRead } from './Interfaces/IRead';
import { injectable } from 'inversify';
import { MongoDBContext } from '../MongoDBContext';
import 'reflect-metadata';
import { IBaseRepository } from './Interfaces/IBaseRepository';
@injectable()
export abstract class BaseRepository<TDomain extends BaseDomain> implements IBaseRepository<TDomain> {

    private readonly _DBCONTEXT: MongoDBContext<TDomain>;

    constructor(DbContext: MongoDBContext<TDomain>) {
        console.log('Constructor');
        this._DBCONTEXT = DbContext;
    }

    find(item: TDomain): Promise<TDomain[]> {
        throw new Error('Method not implemented.');
    }

    async findOne(): Promise<TDomain> {
        console.log('FindOne');
        return await this._DBCONTEXT.findOne({});
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
