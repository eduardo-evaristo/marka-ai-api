import { Module } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthServices],
})
export class AuthModule {}
