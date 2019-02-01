import { inject } from 'inversify';
import { TYPES } from './Types';

export const RestaurantService = inject(TYPES.IRestauranteService);