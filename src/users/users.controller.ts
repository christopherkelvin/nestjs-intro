import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id, id);
    console.log(typeof limit, limit);
    return 'All users will be displayed here';
  }
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'User created successfully';
  }
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
