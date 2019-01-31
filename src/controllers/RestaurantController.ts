
import { Response, Request } from 'express';
import { inject } from 'inversify';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';
import { BaseController } from './BaseController';
import { controller, httpGet } from 'inversify-express-utils';
import { Restaurant } from '../Domains/Restaurant/Restaurant';
import { RestaurantDto } from 'Domains/Restaurant/RestaurantDto';

@controller('/teste')
export default class RestaurantController extends BaseController<Restaurant, RestaurantDto> {

    private _RESTAURANTESERVICE: IRestauranteService<Restaurant>;

    constructor(@inject(TYPES.IRestauranteService) restauranteService: IRestauranteService<Restaurant> ) {
        super();
        this._RESTAURANTESERVICE = restauranteService;
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
