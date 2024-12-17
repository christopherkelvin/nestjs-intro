import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './providers/user.service';
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
