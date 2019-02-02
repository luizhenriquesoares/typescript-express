import { Container, ContainerModule } from 'inversify';
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
import { Restaurant } from '../../../Domains/Restaurant/Restaurant';
import { IRestaurant } from 'Domains/Restaurant/Interfaces/IRestaurant';
import { registerController } from './Utils';

// Controllers
import { RestaurantController } from '../../../Controllers/RestaurantController';

const referenceDataIoCModule = new ContainerModule((bind) => {

    // Controllers
    // registerController(bind, RestaurantController);

    /* Restaurants --------------------------------------------------------------- */
    bind<IRestauranteService<Restaurant>>(TYPES.IRestauranteService)
        .to(RestaurantService).inSingletonScope();

    bind<IRestaurant>(TYPES.IRestaurant)
        .to(Restaurant).inSingletonScope();

    /* DbContext --------------------------------------------------------------- */
    bind<IDbContext<BaseDomain>>(TYPES.IDbContext)
        .to(MongoDBContext).inSingletonScope();

    /* BASE --------------------------------------------------------------- */
    bind<IBaseService<BaseDomain>>(TYPES.IBaseService)
        .to(BaseService).inSingletonScope();

    bind<BaseDomain>(TYPES.BaseDomain)
        .to(BaseDomain).inSingletonScope();

    bind<IBaseRepository<BaseDomain>>(TYPES.IBaseRepository)
        .to(BaseRepository).inSingletonScope();
});

export { referenceDataIoCModule };
