import { BaseService } from './BaseService';
import { Restaurant } from 'src/Domains/Restaurant/Restaurant';
import { RestaurantRepository } from 'src/Insfrastructure/Repositories/RestaurantRepository';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class RestaurantService extends BaseService<Restaurant> {

    constructor(repository: RestaurantRepository) {
        super(repository);
    }

    public getRestaurante(): string {
        return 'Moer';
    }
}
