import { ModelType } from 'typegoose';
import { injectable, inject } from 'inversify';
import { BaseDomain } from '../Domains/BaseDomain';
import { IDbContext } from './Repositories/Interfaces/IDbContext';
import { TYPES } from './CrossCutting/DI/Types';
import 'reflect-metadata';

@injectable()
export class MongoDBContext<T extends BaseDomain> implements IDbContext<BaseDomain> {

    protected _MODEL: BaseDomain;
    protected  _MONGODBCONTEXT: ModelType<BaseDomain>;
    // constructor(@inject(TYPES.IRestauranteService) restauranteService: IRestauranteService ) {
    constructor(@inject(TYPES.BaseDomain) baseDomain: BaseDomain ) {
        this._MODEL = baseDomain;
        this._MONGODBCONTEXT = this._MODEL.getModelForClass(this._MODEL);
    }

    find(item: BaseDomain): Promise<BaseDomain[]> {
        throw new Error('Method not implemented.');
    }
    async findOne(): Promise<InstanceType<any>> {
        console.log('============== MONGO DBContext ==============');
        return await this._MONGODBCONTEXT.findOne({}).exec();
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