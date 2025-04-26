import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  AssociatedUser,
  AssociatedUserSchema,
} from 'src/users/entities/associated-user.schema';

@Schema()
export class Meeting {
  @Prop({ required: true })
  name: string;

  @Prop([Number, Number])
  coordinates: [number, number];

  @Prop({ required: true })
  address: string;

  @Prop({ required: false })
  description: string;

  @Prop({ type: [AssociatedUserSchema], default: [] })
  associatedPeople: AssociatedUser[];

  @Prop({ required: true })
  dateTime: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
