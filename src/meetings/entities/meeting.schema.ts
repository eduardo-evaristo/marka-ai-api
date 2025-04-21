import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

  //   @Prop()
  // TODO: This should be a subdocument
  //   associatedPeople: string[];

  @Prop({ required: true })
  dateTime: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
