import { BaseDomain } from '../Domains/BaseDomain';
import { BaseDto } from '../Domains/BaseDto';
import { BaseService } from 'src/Services/BaseService';
import DIContainer from 'src/Insfrastructure/CrossCutting/DI/SimpleInjection';

export abstract class BaseController<TDomain extends BaseDomain, TDto extends BaseDto> {
    protected readonly _SERVICE: BaseService<TDomain>;

    constructor(service: BaseService<TDomain>) {
        this._SERVICE = service;
    }

    async findByIdAsync(id: bigint | string) {
        const baseService = DIContainer.resolve<BaseService<TDomain>>(BaseService);
        return await baseService.findByIdAsync(id);
    }
}
