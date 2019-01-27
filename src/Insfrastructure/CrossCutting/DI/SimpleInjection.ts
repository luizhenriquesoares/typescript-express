import { Container } from 'inversify';
import { RestaurantService } from 'src/Services/RestaurantService';

const DIContainer = new Container();
DIContainer.bind<RestaurantService>(RestaurantService).toSelf();

export default DIContainer;
