import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersServices {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDTO) {
    const newUser = new this.userModel(createUserDTO);
    return newUser.save();
  }
}
