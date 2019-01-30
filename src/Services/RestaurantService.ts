import { BaseService } from './BaseService';

import { injectable } from 'inversify';
import { RestaurantRepository } from '../Insfrastructure/Repositories/RestaurantRepository';
import IRestauranteService from './Interfaces/IRestauranteService';
import 'reflect-metadata';
import { Restaurant } from '../Domains/Restaurant/Restaurant';

@injectable()
export class RestaurantService extends BaseService<Restaurant> implements IRestauranteService {
    constructor(repository: RestaurantRepository) {
        super(repository);
    }

    async getRestaurante(): Promise<any> {
        console.log('==============RESTAURANTE SERVICE ==============');
        return await this.findOneAsync();
    }
}
