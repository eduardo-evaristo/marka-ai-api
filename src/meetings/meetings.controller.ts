import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeetingsServices } from './meetings.service';
import { createMeetingDTO } from './dtos/create-meeting.dto';

@Controller('meetings')
export class MeetingsController {
  constructor(private meetingsServices: MeetingsServices) {}

  @Get()
  fetch() {
    return this.meetingsServices.fetch();
  }
  @Post()
  create(@Body() createMeetingDTO: createMeetingDTO) {
    return this.meetingsServices.create(createMeetingDTO);
  }

  @Get(':id')
  fetchOne(@Param('id') meetingId: string) {
    return this.meetingsServices.fetchOne(meetingId);
  }
}
