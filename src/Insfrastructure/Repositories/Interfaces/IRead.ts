import { BaseDomain } from '../../../Domains/BaseDomain';

export interface IRead<T  extends BaseDomain> {
    find(item: T): Promise<T[]>;
    findOne(id: bigint): Promise<T>;
}
