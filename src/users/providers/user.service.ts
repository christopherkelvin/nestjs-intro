import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UserService {
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      { firstName: 'John', email: 'John@example.com' },
      { firstName: 'Mary', email: 'Mary@example.com' },
    ];
  }
  public findOneById(id: number) {
    return { id: 1234, firstName: 'John', email: 'John@example.com' };
  }
}
