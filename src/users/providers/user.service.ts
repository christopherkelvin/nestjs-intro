import { Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/provider/auth.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(() => AuthService) private readonly authService: AuthService,
  ) {}
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      { firstName: 'John', email: 'John@example.com' },
      { firstName: 'Mary', email: 'Mary@example.com' },
    ];
  }
  public findOneById(id: string) {
    return { id: 1234, firstName: 'John', email: 'John@example.com' };
  }
}
