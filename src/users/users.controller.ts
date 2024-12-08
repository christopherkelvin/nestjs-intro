import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params, query);
    return 'All users will be displayed here';
  }
  @Post()
  public createUser(@Body() request: any) {
    console.log(request);
    return 'User created successfully';
  }
}
