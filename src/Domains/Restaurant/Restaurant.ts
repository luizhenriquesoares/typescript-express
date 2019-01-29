import { prop } from 'typegoose';
import { BaseDomain } from '../../Domains/BaseDomain';

export class Restaurant extends BaseDomain {
    @prop({required: [true, 'Username is required'], unique: true})
    readonly name: string;
}
