import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class createMeetingDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  coordinates: [number, number];

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  dateTime: string;
}
