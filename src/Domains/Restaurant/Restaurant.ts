import { prop, ModelType } from 'typegoose';
import { BaseDomain, schemaOptions  } from '../../Domains/BaseDomain';

export class Restaurant extends BaseDomain {
    @prop({required: [true, 'Username is required'], unique: true})
    readonly name: string;

    static get model(): ModelType<Restaurant> {
        return new Restaurant().getModelForClass(Restaurant, { schemaOptions});
    }
}
