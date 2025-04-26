import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersServices {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserParams: { username: string; hashedPassword: string }) {
    //1. Create user
    const newUserObject = new this.userModel({
      username: createUserParams.username,
      password: createUserParams.hashedPassword,
    });

    //2. Return MongoDB Object
    return (await newUserObject.save()).toObject();
  }
}
