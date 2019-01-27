import { Container } from 'inversify';
import { RestaurantService } from 'src/Services/RestaurantService';
import { BaseService } from '../../../Services/BaseService';
import { BaseDomain } from 'src/Domains/BaseDomain';
import { BaseRepository } from '../../Repositories/BaseRepository';

const DIContainer = new Container();
DIContainer.bind<RestaurantService>(RestaurantService).toSelf();

DIContainer.bind<BaseService<BaseDomain>>(BaseService).toSelf();

DIContainer.bind<BaseRepository<BaseDomain>>(BaseRepository).toSelf();

export default DIContainer;
