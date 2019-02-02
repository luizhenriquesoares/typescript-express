import 'reflect-metadata';
import { BaseService } from './BaseService';
import { injectable, inject } from 'inversify';
import IRestauranteService from './Interfaces/IRestauranteService';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { BaseDomain } from '../Domains/BaseDomain';
import { RestaurantDomain, DbContext } from '../Insfrastructure/CrossCutting/DI/Decorators';
import { ModelType } from 'typegoose';
import { IDbContext } from '../Insfrastructure/Repositories/Interfaces/IDbContext';

@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestauranteService<BaseDomain> {

    constructor(@RestaurantDomain protected _RESTAURANTDOMAIN: ModelType<Restaurant>, @DbContext protected _DbContext: IDbContext<Restaurant>) {
        super(_DbContext);
        this._MODEL = _RESTAURANTDOMAIN.model();
        console.log('============== CONSTRUCTOR RESTAURANTE SERVICE =====================');
    }

     public getRestaurante(){
        console.log('==============RESTAURANTE SERVICE ==============');
        return this.findOneAsync();
    }
}
