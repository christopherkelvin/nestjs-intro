import { Controller, Get, Param, Post } from '@nestjs/common';
@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(@Param() params: any) {
    console.log(params);
    return 'All users will be displayed here';
  }
  @Post()
  public createUser() {
    return 'User created successfully';
  }
}
