
import { Response, Request } from 'express';
import { inject, injectable } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import { BaseController } from './BaseController';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { RestaurantDto } from '../Domains/Restaurant/RestaurantDto';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';
import { RestaurantService } from '../Insfrastructure/CrossCutting/DI/Decorators';

// @injectable()
@controller('/teste')
// extends BaseController<Restaurant, RestaurantDto>
export class RestaurantController  {

    @RestaurantService protected _RESTAURANTESERVICE: IRestauranteService<Restaurant>;

    constructor() {
        // super();
        // this._RESTAURANTESERVICE = restauranteService;
    }
    @httpGet('/')
   public checkTest(req: Request, res: Response) {
        try {
            res.status(200).json(this._RESTAURANTESERVICE.getRestaurante());
        } catch (error) {
            console.log(error);
        }
        return null;
    }

}
