import { Container } from 'inversify';
import { RestaurantService } from 'src/Services/RestaurantService';
import { BaseService } from '../../../Services/BaseService';
import { BaseDomain } from 'src/Domains/BaseDomain';
import { BaseRepository } from '../../Repositories/BaseRepository';
import { RestaurantRepository } from '../../Repositories/RestaurantRepository';
import { RestaurantDtoMappingToDomain } from '../Mappings/RestaurantDtoMappingToDomain';

const DIContainer = new Container();

/* BASE --------------------------------------------------------------- */
DIContainer.bind<BaseService<BaseDomain>>(BaseService).toSelf();
DIContainer.bind<BaseRepository<BaseDomain>>(BaseRepository).toSelf();

/* Restaurants --------------------------------------------------------------- */
DIContainer.bind<RestaurantService>(RestaurantService).toSelf();
DIContainer.bind<RestaurantRepository>(RestaurantRepository).toSelf();
DIContainer.bind<RestaurantDtoMappingToDomain>(RestaurantDtoMappingToDomain).toSelf();

export default DIContainer;
