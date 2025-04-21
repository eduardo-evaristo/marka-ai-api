import { Module } from '@nestjs/common';
import { MeetingsController } from './meetings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Meeting, MeetingSchema } from './entities/meeting.schema';
import { MeetingsServices } from './meetings.service';

@Module({
  controllers: [MeetingsController],
  providers: [MeetingsServices],
  imports: [
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
})
export class MeetingsModule {}
