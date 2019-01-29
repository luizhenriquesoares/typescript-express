import { BaseDomain } from '../Domains/BaseDomain';
import { BaseDto } from '../Domains/BaseDto';

export abstract class BaseController<TDomain extends BaseDomain, TDto extends BaseDto> {

}
