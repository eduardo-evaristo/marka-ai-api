import { Body, Controller, Post } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthServices) {}
  @Post('register')
  register(@Body() createUserDTO: CreateUserDTO) {
    return this.authServices.create(createUserDTO);
  }
}
