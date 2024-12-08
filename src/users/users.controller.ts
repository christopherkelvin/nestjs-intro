import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';
@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id, limit);
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
