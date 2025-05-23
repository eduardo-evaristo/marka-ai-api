import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import mongodbConfig from './config/mongodb.config';
import { ConfigModule } from '@nestjs/config';
import { MeetingsModule } from './meetings/meetings.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      load: [mongodbConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(mongodbConfig.asProvider()),
    MeetingsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
