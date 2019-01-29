
import { Response, Request } from 'express';
import { SimpleInjector } from '../Insfrastructure/CrossCutting/DI/SimpleInjector';
import IRestauranteService from '../Services/Interfaces/IRestauranteService';
import { TYPES } from '../Insfrastructure/CrossCutting/DI/Types';

export default class RestaurantController {

    private readonly _RESTAURANTESERVICE = SimpleInjector.get<IRestauranteService>(TYPES.IRestauranteService);

   public async checkTest(req: Request, res: Response) {
        try {
            const restaurant = await SimpleInjector.get<IRestauranteService>(TYPES.IRestauranteService).getRestaurante();
            res.status(200).json(restaurant);
        } catch (error) {
            console.log(error);
        }
        return null;
    }

}
