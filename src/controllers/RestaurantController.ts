
import { Response, Request } from 'express';
import { BaseController } from './BaseController';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { RestaurantDto } from '../Domains/Restaurant/RestaurantDto';
import { RestaurantService } from 'src/Services/RestaurantService';
import DIContainer from 'src/Insfrastructure/CrossCutting/DI/SimpleInjection';
import { RestaurantDtoMappingToDomain } from 'src/Insfrastructure/CrossCutting/Mappings/RestaurantDtoMappingToDomain';

export default class RestaurantController extends BaseController<Restaurant, RestaurantDto> {

    constructor(mapperToDomain: RestaurantDtoMappingToDomain, service: RestaurantService) {
        super(service);
    }
    async ping(req: Request, res: Response) {
        const restaurantService = DIContainer.resolve<RestaurantService>(RestaurantService);
        const result = await restaurantService.findByIdAsync('1');
        res.status(200).json(result);
    }

}
