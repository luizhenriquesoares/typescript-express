import { ModelType } from 'typegoose';
import { Restaurant } from '../Restaurant';
export interface IRestaurant {
     model(): Promise<ModelType<Restaurant>>
}