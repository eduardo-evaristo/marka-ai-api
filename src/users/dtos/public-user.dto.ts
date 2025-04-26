import { Types } from 'mongoose';

export class PublicUserDTO {
  constructor(
    private id: Types.ObjectId,
    private username: string,
  ) {}
}
