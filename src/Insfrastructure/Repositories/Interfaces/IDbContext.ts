import { BaseDomain } from '../../../Domains/BaseDomain';

export interface IDbContext<T  extends BaseDomain>  {
    find(item: T): Promise<T[]>;
    findOne(): Promise<T>;
    create(item: T): Promise<boolean>;
    update(id: bigint, item: T): Promise<T>;
    delete(id: bigint): Promise<boolean>;
}