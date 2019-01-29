import { BaseService } from './BaseService';

import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { RestaurantRepository } from '../Insfrastructure/Repositories/RestaurantRepository';
import { resolve } from 'bluebird';
import IRestauranteService from './Interfaces/IRestauranteService';

@injectable()
export class RestaurantService implements IRestauranteService {
    // extends BaseService<Restaurant, RestaurantRepository>
    // constructor(repository: RestaurantRepository) {
    //     super(repository);
    // }

    public async getRestaurante() {
        console.log('RESTAURANT SERVICE');
        // const restaurant = await this.findOneAsync();
        return resolve('dsds');
    }
}
