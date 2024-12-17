import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
  Patch,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';
import { GetUsersParamDto } from './dtos/get-user-param.dto';
@Controller('users')
export class UserController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly userService: UserService) {}
  @Get('/:id?')
  public getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() getUsersParamDto: GetUsersParamDto,
  ) {
    return this.userService.findAll(getUsersParamDto, limit, page);
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
