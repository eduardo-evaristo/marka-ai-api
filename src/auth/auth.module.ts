import { Module } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { AuthController } from './auth.controller';

@Module({ controllers: [AuthController], providers: [AuthServices] })
export class AuthModule {}
