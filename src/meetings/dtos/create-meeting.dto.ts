import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNumber,
  IsString,
} from 'class-validator';

export class createMeetingDTO {
  @IsString()
  name: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  coordinates: [number, number];

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsDateString()
  dateTime: string;
}
