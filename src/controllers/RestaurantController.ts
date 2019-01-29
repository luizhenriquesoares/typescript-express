
import { Response, Request } from 'express';
import { inject } from 'inversify';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';
import { interfaces, controller, httpGet } from 'inversify-express-utils';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';

@controller('/teste')
export default class RestaurantController implements interfaces.Controller {

    private _RESTAURANTESERVICE: IRestauranteService;

    constructor(@inject(TYPES.IRestauranteService) private restauranteService: IRestauranteService ) {
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
