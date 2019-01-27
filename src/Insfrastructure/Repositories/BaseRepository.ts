import { BaseDomain } from '../../Domains/BaseDomain';
import { IWrite } from './Interfaces/IWrite';
import { IRead } from './Interfaces/IRead';
import { injectable } from 'inversify';
import 'reflect-metadata';
@injectable()
export abstract class BaseRepository<TDomain extends BaseDomain> implements IWrite<TDomain>, IRead<TDomain> {

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