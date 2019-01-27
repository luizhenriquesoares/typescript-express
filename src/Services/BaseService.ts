import { BaseDomain } from '../Domains/BaseDomain';
import { injectable } from 'inversify';
import 'reflect-metadata';
@injectable()

export abstract class BaseService<TDomain extends BaseDomain> {}