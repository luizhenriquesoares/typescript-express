import { inject } from 'inversify';
import { TYPES } from './Types';

export const RestaurantService = inject(TYPES.IRestauranteService);
export const RestaurantDomain  = inject(TYPES.IRestaurant);
export const DbContext         = inject(TYPES.IDbContext);
export const BaseRepository    = inject(TYPES.IBaseRepository);