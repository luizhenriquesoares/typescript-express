
import { Response, Request } from 'express';
import { SimpleInjector } from '../Insfrastructure/CrossCutting/DI/SimpleInjector';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';

export default class RestaurantController {

    private _RESTAURANTESERVICE: IRestauranteService;

    constructor(restauranteService = SimpleInjector.get<IRestauranteService>(TYPES.IRestauranteService)) {
        this._RESTAURANTESERVICE = restauranteService;
    }
   public checkTest(req: Request, res: Response) {
        try {
            const obj = new RestaurantController();
            const restaurant = obj._RESTAURANTESERVICE.getRestaurante();
            res.status(200).json(restaurant);
        } catch (error) {
            console.log(error);
        }
        return null;
    }

}
