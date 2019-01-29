import { Container } from 'inversify';
import { BaseService } from '../../../Services/BaseService';
import { BaseRepository } from '../../Repositories/BaseRepository';
import { RestaurantRepository } from '../../Repositories/RestaurantRepository';
import { RestaurantDtoMappingToDomain } from '../Mappings/RestaurantDtoMappingToDomain';
import { MongoDBContext } from '../../MongoDBContext';
import { BaseDomain } from '../../../Domains/BaseDomain';
import { RestaurantService } from '../../../Services/RestaurantService';
import IRestauranteService from '../../../Services/Interfaces/IRestauranteService';
import { TYPES } from './Types';

const SimpleInjector = new Container();

/* DbContext --------------------------------------------------------------- */
// DIContainer.bind<MongoDBContext<BaseDomain>>(MongoDBContext).toSelf();

/* BASE --------------------------------------------------------------- */
// DIContainer.bind<BaseService<BaseDomain, TRepository>>(BaseService).toSelf();
// DIContainer.bind<BaseRepository<BaseDomain>>(BaseRepository).toSelf();

/* Restaurants --------------------------------------------------------------- */
// SimpleInjector.bind<RestaurantService>(RestaurantService).toSelf();
// DIContainer.bind<RestaurantRepository>(RestaurantRepository).toSelf();
SimpleInjector.bind<IRestauranteService>(TYPES.IRestauranteService).to(RestaurantService);
// DIContainer.bind<RestaurantDtoMappingToDomain>(RestaurantDtoMappingToDomain).toSelf();

export { SimpleInjector };
