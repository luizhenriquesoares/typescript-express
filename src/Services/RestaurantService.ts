import { BaseService } from './BaseService';
import { injectable, inject } from 'inversify';
import { RestaurantRepository } from '../Insfrastructure/Repositories/RestaurantRepository';
import IRestauranteService from './Interfaces/IRestauranteService';
import 'reflect-metadata';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import { BaseDomain } from '../Domains/BaseDomain';
import { BaseRepository } from '../Insfrastructure/Repositories/BaseRepository';

@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestauranteService<BaseDomain> {

    constructor(@inject(TYPES.IBaseRepository) repository: RestaurantRepository, @inject(TYPES.IRestaurante) restaurantDomain: Restaurant) {
        super(repository);
        this._MODEL = restaurantDomain.model();
    }

     public getRestaurante(){
        console.log('==============RESTAURANTE SERVICE ==============');
        return 'XAUBLAU';
        // return this.findOneAsync();
    }
}
