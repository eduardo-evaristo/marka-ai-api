import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';

//This is the schema of the subdocument to be used inside Meetings, in associatedPeople
// This should contain the userId and a boolean field called confirmed
// Later on, I might include other stuff, not now however
@Schema()
export class AssociatedUser {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  // This is for populating it further on
  user: User;

  @Prop({ default: false })
  confirmed: boolean;
}

export const AssociatedUserSchema =
  SchemaFactory.createForClass(AssociatedUser);
