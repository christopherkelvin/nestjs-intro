import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
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
  public createUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request, headers, ip);
    return 'User created successfully';
  }
}
