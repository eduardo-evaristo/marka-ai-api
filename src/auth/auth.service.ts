import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersServices } from 'src/users/users.service';
import { PublicUserDTO } from 'src/users/dtos/public-user.dto';

@Injectable()
export class AuthServices {
  constructor(private usersServices: UsersServices) {}

  async create(createUserDTO: CreateUserDTO): Promise<PublicUserDTO> {
    const { username, password, confirmPassword } = createUserDTO;
    // 1. Check if passwords are the same
    if (password !== confirmPassword)
      throw new BadRequestException('The passwords must be equal!');

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);

    // 3. Create & save user with username and hashed password
    const savedUser = await this.usersServices.create({
      username,
      hashedPassword,
    });

    // 4. Return user without password
    return new PublicUserDTO(savedUser._id, savedUser.username);
  }
}
