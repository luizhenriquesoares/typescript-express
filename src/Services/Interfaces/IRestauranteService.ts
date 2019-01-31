import { BaseDomain } from '../../Domains/BaseDomain';
export default interface IRestauranteService<TDomain extends BaseDomain> {
     getRestaurante();
}