import { BaseRepository } from '../../Insfrastructure/Repositories/BaseRepository';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { Restaurant } from '../../Domains/Restaurant/Restaurant';

injectable();
export class RestaurantRepository extends BaseRepository<Restaurant> {}
