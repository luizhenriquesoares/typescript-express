import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class RestaurantService {

    public getRestaurante(): string {
        return 'Moer';
    }
}
