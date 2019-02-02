
import { Response, Request } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import {Restaurant} from '../Domains/Restaurant/Restaurant';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';
import { RestaurantService } from '../Insfrastructure/CrossCutting/DI/Decorators';

@controller('/teste')
export class RestaurantController  {

    @RestaurantService protected _RESTAURANTESERVICE: IRestauranteService<Restaurant>;

    constructor(){
         console.log('============== CONSTRUCTOR CONTROLLER ===================');
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
