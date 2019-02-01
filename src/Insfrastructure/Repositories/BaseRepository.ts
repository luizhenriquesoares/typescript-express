import { BaseDomain } from '../../Domains/BaseDomain';
import { injectable, inject, multiInject } from 'inversify';
import 'reflect-metadata';
import { IBaseRepository } from './Interfaces/IBaseRepository';
import { TYPES } from '../../Insfrastructure/CrossCutting/DI/Types';
import { IDbContext } from './Interfaces/IDbContext';
import { ModelType, Typegoose } from 'typegoose';
@injectable()
export class BaseRepository<TDomain extends BaseDomain> implements IBaseRepository<TDomain> {

    private readonly _DBCONTEXT: IDbContext<TDomain>;
    protected _BASEMODEL: ModelType<any>;

    constructor(@inject(TYPES.IDbContext) DbContext: IDbContext<TDomain>) {
        console.log('=================== CONSTRUCTOR BASE REPOSITORY=============================');
        this._DBCONTEXT = DbContext;
    }

    find(item: TDomain): Promise<TDomain[]> {
        throw new Error('Method not implemented.');
    }
    findOne(){
        console.log('============== Base Repository FindONE ==============');
        console.log('HERE', this._BASEMODEL);
        return this._DBCONTEXT.findOne();
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
