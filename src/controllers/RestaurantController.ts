
import { Response, Request } from 'express';
import { BaseController } from './BaseController';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { RestaurantDto } from '../Domains/Restaurant/RestaurantDto';
import { RestaurantService } from 'src/Services/RestaurantService';
import DIContainer from 'src/Insfrastructure/CrossCutting/DI/SimpleInjection';

export default class RestaurantController extends BaseController<Restaurant, RestaurantDto> {

    constructor() {
        super();
    }

    public ping(req: Request, res: Response) {
        const service = DIContainer.resolve<RestaurantService>(RestaurantService);
        res.status(200).json(service.getRestaurante());
    }

}
