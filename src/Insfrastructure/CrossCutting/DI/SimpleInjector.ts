import { Container } from 'inversify';
import { BaseService } from '../../../Services/BaseService';
import { BaseRepository } from '../../Repositories/BaseRepository';
import { BaseDomain } from '../../../Domains/BaseDomain';
import { RestaurantService } from '../../../Services/RestaurantService';
import IBaseService from '../../../Services/Interfaces/IBaseService';
import IRestauranteService from '../../../Services/Interfaces/IRestauranteService';
import { IBaseRepository } from '../../../Insfrastructure/Repositories/Interfaces/IBaseRepository';
import { IDbContext } from '../../Repositories/Interfaces/IDbContext';
import { MongoDBContext } from '../../../Insfrastructure/MongoDBContext';
import { TYPES } from './Types';
const SimpleInjector = new Container();

/* DbContext --------------------------------------------------------------- */
SimpleInjector.bind<IDbContext<BaseDomain>>(TYPES.IDbContext).to(MongoDBContext);

/* BASE --------------------------------------------------------------- */
SimpleInjector.bind<IBaseService<BaseDomain>>(TYPES.IBaseService).to(BaseService);
SimpleInjector.bind<BaseDomain>(TYPES.BaseDomain).to(BaseDomain);
SimpleInjector.bind<IBaseRepository<BaseDomain>>(TYPES.IBaseRepository).to(BaseRepository);

/* Restaurants --------------------------------------------------------------- */
SimpleInjector.bind<IRestauranteService>(TYPES.IRestauranteService).to(RestaurantService);

export { SimpleInjector };
