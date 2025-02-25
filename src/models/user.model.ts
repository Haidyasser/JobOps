import {prop} from '@typegoose/typegoose';
import {getModelForClass} from '@typegoose/typegoose';

export class User {
  @prop({required: true})
  public name!: string;

  @prop({required: true, unique: true})
  public email!: string;

  @prop({required: true})
  public password!: string;

  @prop({required: true})
  public phoneNumber!: string;

  @prop({default: 'seeker', enum: ['seeker', 'employer']})
  public role!: string;

  @prop({default: 0})
  public rate!: number;

  @prop({default: Date.now()})
  public createdAt!: Date;
}

export const UserModel = getModelForClass(User);
