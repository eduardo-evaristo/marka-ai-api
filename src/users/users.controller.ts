import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersServices) {}
  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO);
  }
}
