import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meeting, MeetingSchema } from './entities/meeting.schema';
import { Model } from 'mongoose';
import { createMeetingDTO } from './dtos/create-meeting.dto';
import { AssociatedUser } from 'src/users/entities/associated-user.schema';

@Injectable()
export class MeetingsServices {
  constructor(
    @InjectModel(Meeting.name) private meetingModel: Model<Meeting>,
  ) {}
  async create(createMeetingDTO: createMeetingDTO) {
    const newMeeting = new this.meetingModel(createMeetingDTO);
    return newMeeting.save();
  }

  async fetchOne(meetingId: string) {
    const meeting = await this.meetingModel.findById(meetingId).populate<{
      associatedPeople: AssociatedUser;
    }>('associatedPeople.user');
    return meeting;
  }

  async fetch() {
    // TODO: This is likely gonna be used to display all the ones we currently have, so likely no need to fetch the associatedPeople in this one
    const meetings = await this.meetingModel.find();
    return meetings;
  }
}
