import { BaseService } from './BaseService';
import { injectable, inject } from 'inversify';
import { RestaurantRepository } from '../Insfrastructure/Repositories/RestaurantRepository';
import IRestauranteService from './Interfaces/IRestauranteService';
import 'reflect-metadata';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { ModelType } from 'typegoose';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import { schemaOptions, BaseDomain } from '../Domains/BaseDomain';

// implements IRestauranteService<Restaurant>
@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestauranteService<BaseDomain> {

    protected _DOMAIN: Restaurant;

    constructor(@inject(TYPES.IBaseRepository) repository: RestaurantRepository, @inject(TYPES.IRestaurante) restaurantDomain: Restaurant) {
        super(repository);
        this._DOMAIN = restaurantDomain;
        this._MODEL = this._DOMAIN.model();
    }

     public getRestaurante(){
        console.log('==============RESTAURANTE SERVICE ==============');
        return this.findOneAsync();
    }
}
