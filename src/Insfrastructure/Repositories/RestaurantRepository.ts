import { BaseRepository } from '../../Insfrastructure/Repositories/BaseRepository';
import { Restaurant } from 'src/Domains/Restaurant/Restaurant';
import { injectable } from 'inversify';
import 'reflect-metadata';

injectable();
export class RestaurantRepository extends BaseRepository<Restaurant> {}
