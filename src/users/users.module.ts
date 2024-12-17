import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './providers/user.service';
import { AuthService } from 'src/auth/provider/auth.service';
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [forwardRef(() => AuthService)],
})
export class UsersModule {}
