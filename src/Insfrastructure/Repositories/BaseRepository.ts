import { BaseDomain } from '../../Domains/BaseDomain';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IBaseRepository } from './Interfaces/IBaseRepository';
import { TYPES } from '../../Insfrastructure/CrossCutting/DI/Types';
import { IDbContext } from './Interfaces/IDbContext';
@injectable()
export class BaseRepository<TDomain extends BaseDomain> implements IBaseRepository<TDomain> {

    private readonly _DBCONTEXT: IDbContext<TDomain>;

    constructor(@inject(TYPES.IDbContext) DbContext: IDbContext<TDomain>) {
        this._DBCONTEXT = DbContext;
    }

    find(item: TDomain): Promise<TDomain[]> {
        throw new Error('Method not implemented.');
    }
    async findOne(): Promise<TDomain> {
        console.log('============== Base Repository FindONE ==============');
        return await this._DBCONTEXT.findOne();
    }
    create(item: TDomain): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    update(id: bigint, item: TDomain): Promise<TDomain> {
        throw new Error('Method not implemented.');
    }
    delete(id: bigint): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
