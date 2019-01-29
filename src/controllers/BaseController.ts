import { BaseDomain } from '../Domains/BaseDomain';
import { BaseDto } from '../Domains/BaseDto';
import { interfaces } from 'inversify-express-utils';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController<TDomain extends BaseDomain, TDto extends BaseDto> implements interfaces.Controller {

}
