import { SchemaOptions } from 'mongoose';
import { Typegoose } from 'typegoose';
import { injectable, decorate } from 'inversify';

decorate(injectable(), Typegoose);
export class BaseDomain extends Typegoose  {
    public readonly id: bigint | string;
}

export const schemaOptions: SchemaOptions = {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  };